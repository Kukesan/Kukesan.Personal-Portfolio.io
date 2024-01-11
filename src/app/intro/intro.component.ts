import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { transition, style, animate, trigger } from '@angular/animations';
import { AppService } from '../app.service';
import { SharedScrollService } from '../shared/shared-scroll.service';

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

  constructor(private router: Router, private appService: AppService,private sharedScrollService: SharedScrollService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    var navigatorIconImage1 = document.getElementById('navigator-icon-image1') as HTMLElement;
    var navigatorIconImage2 = document.getElementById('navigator-icon-image2') as HTMLElement;
    var navigatorIconImage3 = document.getElementById('navigator-icon-image3') as HTMLElement;

    var navigatorIconText1 = document.getElementById('navigator-icon-text1') as HTMLElement;
    var navigatorIconText2 = document.getElementById('navigator-icon-text2') as HTMLElement;
    var navigatorIconText3 = document.getElementById('navigator-icon-text3') as HTMLElement;

    console.log(this.appService.introInitialLoad);



    setTimeout(() => {
      if (!this.appService.introInitialLoad) {
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

        this.appService.introInitialLoad = true;
      }
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
