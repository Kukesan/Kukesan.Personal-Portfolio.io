import { Component, HostListener, OnInit, ElementRef } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private elementRef: ElementRef, private appService: AppService,private router: Router) { }

  currentScrollElementId: string | null = null;
  observer: any = IntersectionObserver;

  ngOnInit() {
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      var entertainmentLeft = document.getElementById('entertainment-left') as HTMLElement;
      var entertainmentRight = document.getElementById('entertainment-right') as HTMLElement;
      if (entry.isIntersecting) {
        this.currentScrollElementId = entry.target.id;
        if (this.currentScrollElementId == 'entertainment-left') {
          if (!this.appService.entertainmentInitialLoad) {
            entertainmentLeft.style.transitionDuration = '1s';

            entertainmentRight.style.transitionDuration = '1s';
            entertainmentRight.style.transitionDelay = '0.3s';

            this.appService.entertainmentInitialLoad = true;
          }
          entertainmentLeft.style.opacity = '1';
          entertainmentRight.style.opacity = '1';
        }


        var experienceLeft = document.getElementById('experience-left') as HTMLElement;
        var experienceRight = document.getElementById('experience-right') as HTMLElement;

        if (this.currentScrollElementId == 'experience-left') {
          if (!this.appService.experienceInitialLoad) {
            experienceLeft.style.transitionDuration = '1s';

            experienceRight.style.transitionDuration = '1s';
            experienceRight.style.transitionDelay = '0.3s';

            this.appService.experienceInitialLoad = true;
          }
          experienceLeft.style.opacity = '1';
          experienceRight.style.opacity = '1';
        }
      }
    }
    );
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const elements = this.elementRef.nativeElement.querySelectorAll('[id]');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    this.observer = new IntersectionObserver(this.handleIntersection.bind(this), options);
    elements.forEach((element: any) => this.observer.observe(element));
  }

  goExperience() {
    // this.router.navigate(['organizations']);
    this.router.navigate(['experience']);
  }

  goEntertainment() {
    this.router.navigate(['entertainment']);
  }

}
