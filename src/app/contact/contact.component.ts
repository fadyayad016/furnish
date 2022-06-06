
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ContactForm=this.fb.group({
    Name:["",Validators.required],
    Subject:["",Validators.required],
    Email:["",[Validators.required,Validators.email]],
    Phone:["",Validators.required],
    Notes:["",Validators.required],
   /**
    * name
    */

  })
  get Name(){
    return this.ContactForm.get('Name') 
  }
  get Subject(){
    return this.ContactForm.get('Subject') 
  }
  get Phone(){
    return this.ContactForm.get('Phone') 
  }
  get Email(){
    return this.ContactForm.get('Email') 
  }
  get Notes(){
    return this.ContactForm.get('Notes') 
  }
  ngOnInit(): void {
  }
  submit():void{
    alert("Thank you for contacting with us.");
    this.ContactForm.reset({
      Name:"",
      Subject:"",
      Email:"",
      Phone:"",
      Notes:""
    })
  }
}
