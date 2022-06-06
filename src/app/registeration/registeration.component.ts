
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router) { }
  //user=new User("Abanob","bebo@gmail.com","asadsa","asadsa","FaceBook");
   Top=["FaceBook","twitter","Google"];

  RegisterForm=this.fb.group({
    name:["",[Validators.required]],
    email:["",[Validators.required,Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]],
    password:['',Validators.required],
    confirmpassword:['',[Validators.required]],
    Select:[''],
    Copmo:['',Validators.required]

  })
  get name(){
    return this.RegisterForm.get('name');
  }
  get email(){
    return this.RegisterForm.get('email');
  }
  get password(){
    return this.RegisterForm.get('password');
  }
  get rPassword(){
    return this.RegisterForm.get('confirmpassword');
  }
  get Select(){
    return this.RegisterForm.get('Select');
  }
  ngOnInit(): void {
  }
  Submit():void{
    this.router.navigateByUrl('/Home');
  }

}
