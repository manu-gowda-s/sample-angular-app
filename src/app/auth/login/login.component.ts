import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/LoginForm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
  }

  form: LoginForm = {
    email: '',
    password: ''
  };

  submit(){
    console.log(this.form);
  }
}
