import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { fakeInterceptor } from './interceptors/fake-backend.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegisterLoginComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [fakeInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
