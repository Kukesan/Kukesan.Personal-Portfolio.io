import { Component, HostListener, OnInit } from '@angular/core';
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
    message: new FormControl('', Validators.required),
    isRead: new FormControl(false)
  });

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event']) onScrollEvent() {
    setTimeout(() => {
      var leftContent = document.getElementById('left-content') as HTMLElement;
      var rightContent = document.getElementById('right-content') as HTMLElement;

      var contactInformation = document.getElementById('contact-information') as HTMLElement;
      var contactInformationTitleUnderline = document.getElementById('contact-information-title-underline') as HTMLElement;

      leftContent.style.opacity = '1';
      leftContent.style.transitionDuration = '1s';

      rightContent.style.marginBottom = '0px';
      rightContent.style.transitionDelay = '1s';
      rightContent.style.transitionDuration = '2s';

      contactInformation.style.transitionDelay = '1s';
      contactInformation.style.display = 'block';

      contactInformationTitleUnderline.style.transitionDelay = '5s';
      contactInformationTitleUnderline.style.transitionDuration = '2s';
      contactInformationTitleUnderline.style.marginRight = '10px';
      // contactInformationTitleUnderline.style.opacity = '1';

    }, 500);
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
