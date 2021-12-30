import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RestBackendService {

  protected readonly API_URL = `${environment.url}`;
  constructor(private http:HttpClient) { }
  register(data:any): Observable<any> {
    console.log(data);
    return this.http.post<any>(`${this.API_URL}/users/register`,data);
  }
  authenticate(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/users/autenticate`);
  }
}
