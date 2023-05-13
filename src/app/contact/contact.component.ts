import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( private http :HttpClient) { }
  
  form: any = {};

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    contactNo: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  addContactDetails(){
    console.log(this.contactForm.value)
    this.http.post('https://portfolio-924c8-default-rtdb.firebaseio.com/contact.json',this.contactForm.value).subscribe(
      (response: any)=>{
        console.log(response)
      }
    )
  }
}
