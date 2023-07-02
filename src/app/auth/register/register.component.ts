import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/types/RegisterForm';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(){

  }

  form : RegisterForm = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  ngOnInit(): void {
  }

  submit(){
    console.log(this.form);
  }

}
