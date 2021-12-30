import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
let users = JSON.parse(localStorage.getItem('users') as string) || [];
@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.handleRoute(request, next);
  }
  handleRoute(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request);
    switch (true) {
      case request.url.endsWith('/users/authenticate') && request.method === 'POST':
        return this.authenticate(request.body);
      case request.url.endsWith('/users/register') && request.method === 'POST':
        return this.register(request.body);
      default:
        return next.handle(request);
    }
  }
  authenticate(body: any) {
    const { username, password } = body;
    const user = users.find((x: { username: any; password: any; })=> x.username === username && x.password === password);
    if (!user) return this.error('Username or password is incorrect');
    return this.ok({
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      token: 'fake-jwt-token'
    })
  }
  register(body: any) {
    console.log(body);
    const user = body
    if (users.find((x: { username: any; password: any; }) => x.username === user.username)) {
      return this.error('Username "' + user.username + '" is already taken')
    }
    user.id = users.length ? Math.max(...users.map((x: { id: number}) => x.id)) + 1 : 1;
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return this.ok({"message":"successfull"});
  }
  ok(body: any) {
    return of(new HttpResponse({ status: 200, body }))
  }
  error(message: any) {
    return throwError({ error: { message } });
  }
}
export const fakeInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
}

