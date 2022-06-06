import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  Login=this.fb.group({
    email:['',[Validators.required,Validators.email,Validators.pattern("[a-z0-9]+@[a-z]+\.[a-z]{2,3}")]],
    password:['',Validators.required]
  })
  get email(){
    return this.Login.get('email');
  }
  get password(){
    return this.Login.get('password');
  }
  ngOnInit(): void {
  }

}
