import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { transition, style, animate, trigger } from '@angular/animations';

const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('1s ease-in', style({
    opacity: 1
  }))
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('1s ease-out', style({
    opacity: 0
  }))
])

const fadeIn = trigger('fadeIn', [
  enterTransition
]);

const fadeOut = trigger('fadeOut', [
  leaveTrans
]);

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  animations: [
    fadeIn,
    fadeOut
  ]
})
export class IntroComponent implements OnInit {

  show:boolean = false;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    var introImage = document.getElementById('intro-image') as HTMLElement;
    var introTitle = document.getElementById('intro-title') as HTMLElement;
    var introSubTitle = document.getElementById('intro-subtitle') as HTMLElement;
    var introDescription = document.getElementById('intro-description') as HTMLElement;

    var socialMedia = document.getElementById('social-media') as HTMLElement;
    var contactButton = document.getElementById('contact-button') as HTMLElement;

    var navigatorIconImage1 = document.getElementById('navigator-icon-image1') as HTMLElement; 
    var navigatorIconImage2 = document.getElementById('navigator-icon-image2') as HTMLElement;  
    var navigatorIconImage3 = document.getElementById('navigator-icon-image3') as HTMLElement;

    var navigatorIconText1 = document.getElementById('navigator-icon-text1') as HTMLElement;
    var navigatorIconText2 = document.getElementById('navigator-icon-text2') as HTMLElement;
    var navigatorIconText3 = document.getElementById('navigator-icon-text3') as HTMLElement;

    setTimeout(() => {
      introImage.style.transitionDuration = '1s';
      introImage.style.opacity = '1';

      introTitle.style.transitionDuration = '1s';
      introTitle.style.opacity = '1';
      introTitle.style.transitionDuration = '1s';
      introTitle.style.marginLeft = '0px';

      introSubTitle.style.transitionDuration = '1s';
      introSubTitle.style.opacity = '1';
      introSubTitle.style.transitionDelay = '0.5s';
      introSubTitle.style.transitionDuration = '1s';
      introSubTitle.style.marginLeft = '0px';

      introDescription.style.transitionDuration = '1s';
      introDescription.style.opacity = '1';
      introDescription.style.transitionDelay = '1s';
      introDescription.style.transitionDuration = '1s';
      introDescription.style.marginLeft = '0px';
    
      socialMedia.style.transitionDuration = '1s';
      socialMedia.style.opacity = '1';
      socialMedia.style.transitionDelay = '1.5s';

      contactButton.style.transitionDuration = '1s';
      contactButton.style.opacity = '1';
      contactButton.style.transitionDelay = '2s';

      navigatorIconImage1.style.transitionDuration = '1s';
      navigatorIconImage1.style.opacity = '1';
      navigatorIconImage1.style.transitionDelay = '2.5s';
      navigatorIconImage1.style.width =  '30%';

      navigatorIconImage2.style.transitionDuration = '1s';
      navigatorIconImage2.style.opacity = '1';
      navigatorIconImage2.style.transitionDelay = '2.5s';
      navigatorIconImage2.style.width =  '30%';

      navigatorIconImage3.style.transitionDuration = '1s';
      navigatorIconImage3.style.opacity = '1';
      navigatorIconImage3.style.transitionDelay = '2.5s';
      navigatorIconImage3.style.width =  '30%';

      navigatorIconText1.style.transitionDuration = '1s';
      navigatorIconText1.style.opacity = '1';
      navigatorIconText1.style.transitionDelay = '3s';
      navigatorIconText1.style.marginTop = '8px';

      navigatorIconText2.style.transitionDuration = '1s';
      navigatorIconText2.style.opacity = '1';
      navigatorIconText2.style.transitionDelay = '3.5s';
      navigatorIconText2.style.marginTop = '8px';

      navigatorIconText3.style.transitionDuration = '1s';
      navigatorIconText3.style.opacity = '1';
      navigatorIconText3.style.transitionDelay = '4s';
      navigatorIconText3.style.marginTop = '8px';
    }, 500);
    
    setTimeout(() => {
      
    }, 500);
  }
  goContactUs(){
    this.router.navigate(['contact']);
  }
}
