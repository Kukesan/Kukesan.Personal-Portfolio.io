import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { SharedScrollService } from '../shared/shared-scroll.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor( private appService: AppService,private sharedScrollService: SharedScrollService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    var introImage = document.getElementById('intro-image') as HTMLElement;
    var introTitle = document.getElementById('intro-title') as HTMLElement;
    var introSubTitle = document.getElementById('intro-subtitle') as HTMLElement;
    var introDescription = document.getElementById('intro-description') as HTMLElement;

    var contactButton = document.getElementById('contact-button') as HTMLElement;

    setTimeout(() => {
      if (!this.appService.introInitialLoad) {

        introImage.style.transitionDelay = '1s';
        introImage.style.transitionDuration = '1s';

        introTitle.style.transitionDuration = '1s';

        introSubTitle.style.transitionDuration = '1s';
        introSubTitle.style.transitionDelay = '0.2s';

        introDescription.style.transitionDuration = '1s';
        introDescription.style.transitionDelay = '0.4s';

        contactButton.style.transitionDuration = '1s';
        contactButton.style.transitionDelay = '0.8s';

        this.appService.introInitialLoad = true;
      }
      introImage.style.opacity = '1';

      introTitle.style.opacity = '1';
      introTitle.style.marginLeft = '0px';

      introSubTitle.style.opacity = '1';
      introSubTitle.style.marginLeft = '0px';
      introDescription.style.opacity = '1';
      introDescription.style.marginLeft = '0px';
      contactButton.style.opacity = '1';
    }, 5);

    setTimeout(() => {
      contactButton.style.transitionDelay = '0s';
    }, 10);

  }

  scrollToNavigateSection() {
    this.sharedScrollService.triggerScroll();
  }

}
