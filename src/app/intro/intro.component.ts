import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { transition, style, animate, trigger } from '@angular/animations';
import { AppService } from '../app.service';

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

  show: boolean = false;

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
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

    console.log(this.appService.mainPageInitialLoad);



    setTimeout(() => {
      if (!this.appService.mainPageInitialLoad) {

        introImage.style.transitionDuration = '1s';

        introTitle.style.transitionDuration = '1s';

        introSubTitle.style.transitionDuration = '1s';
        introSubTitle.style.transitionDelay = '0.2s';

        introDescription.style.transitionDuration = '1s';
        introDescription.style.transitionDelay = '0.4s';

        socialMedia.style.transitionDuration = '1s';
        socialMedia.style.transitionDelay = '0.6s';

        contactButton.style.transitionDuration = '1s';
        contactButton.style.transitionDelay = '0.8s';

        navigatorIconImage1.style.transitionDuration = '1s';
        navigatorIconImage1.style.transitionDelay = '1.4s';

        navigatorIconImage2.style.transitionDuration = '1s';
        navigatorIconImage2.style.transitionDelay = '1.4s';

        navigatorIconImage3.style.transitionDuration = '1s';
        navigatorIconImage3.style.transitionDelay = '1.4s';

        navigatorIconText1.style.transitionDuration = '1s';
        navigatorIconText1.style.transitionDelay = '1.8s';

        navigatorIconText2.style.transitionDuration = '1s';
        navigatorIconText2.style.transitionDelay = '2s';

        navigatorIconText3.style.transitionDuration = '1s';
        navigatorIconText3.style.transitionDelay = '2.2s';

        this.appService.mainPageInitialLoad = true;
      }
      introImage.style.opacity = '1';

      introTitle.style.opacity = '1';
      introTitle.style.marginLeft = '0px';

      introSubTitle.style.opacity = '1';
      introSubTitle.style.marginLeft = '0px';
      introDescription.style.opacity = '1';
      introDescription.style.marginLeft = '0px';
      socialMedia.style.opacity = '1';
      contactButton.style.opacity = '1';
      navigatorIconImage1.style.opacity = '1';
      navigatorIconImage1.style.width = '30%';
      navigatorIconImage2.style.opacity = '1';
      navigatorIconImage2.style.width = '30%';
      navigatorIconImage3.style.opacity = '1';
      navigatorIconImage3.style.width = '30%';
      navigatorIconText1.style.opacity = '1';
      navigatorIconText1.style.marginTop = '8px';
      navigatorIconText2.style.opacity = '1';
      navigatorIconText2.style.marginTop = '8px';
      navigatorIconText3.style.opacity = '1';
      navigatorIconText3.style.marginTop = '8px';
    }, 5);

    setTimeout(() => {
      contactButton.style.transitionDelay = '0s';
    }, 10);

  }
  goContactUs() {
    this.router.navigate(['contact']);
  }

  goProjects() {
    this.router.navigate(['projects']);

  }

  goAchivements() {
    this.router.navigate(['achive']);
  }

  goSkills() {
    this.router.navigate(['skills']);
  }
}
