import { Component, OnInit } from '@angular/core';
import { RestBackendService } from '../services/rest-backend.service';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {

  constructor(private restBackend:RestBackendService) { }

  ngOnInit(): void {
    this.restBackend.register({username:"youssef",password:"hello"}).subscribe(data=>{
      console.log(data);
    });
  }

}
