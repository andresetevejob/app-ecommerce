import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { RegisterLoginComponent } from './register-login/register-login.component';

const routes: Routes = [
  {path:'login',component:LoginComponentComponent},
  {path:'register',component:RegisterLoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',component:NotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
