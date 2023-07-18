import { Component, HostListener, OnInit, ElementRef } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { SharedScrollService } from '../shared/shared-scroll.service';
import { SkillLink } from '../skills/skills.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  skillLinks: SkillLink[] = [
    new SkillLink("Git Hub", "https://github.com/Kukesan", "https://live.staticflickr.com/65535/53054599762_6fe632260f_n.jpg"),
    new SkillLink("Hacker Rank", "https://www.hackerrank.com/K_Kukesan?hr_r=1", "https://live.staticflickr.com/65535/53055189741_4d84135af4_n.jpg"),
    new SkillLink("Pinterest", "https://www.pinterest.com/K_Kukesan/_saved/", "https://live.staticflickr.com/65535/53055190236_be696ef876.jpg"),
    new SkillLink("Solo Learn", "https://www.linkedin.com/in/ketheeswaran-kukesan/", "https://live.staticflickr.com/65535/53055190476_127d83f778.jpg"),
    new SkillLink("Kaggle", "https://www.linkedin.com/in/ketheeswaran-kukesan/", "https://live.staticflickr.com/65535/53055563985_b9db2ae4ef_c.jpg")
  ]

  constructor(private elementRef: ElementRef, private appService: AppService, private router: Router, private sharedScrollService: SharedScrollService) {
    this.sharedScrollService.scrollTriggerComponent$.subscribe(() => {
      this.scroll('contact-component');
    });

    this.sharedScrollService.scrollTriggerReviewsComponent$.subscribe(() => {
      this.scroll('reviews-component');
    });
  }

  currentScrollElementId: string | null = null;
  observer: any = IntersectionObserver;

  ngOnInit() {
  }

  goLink(link: string): void {
    window.open(link, "_blank");
  }

  scroll(value: any) {
    const element = document.getElementById(value) as HTMLElement;

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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

        var linkCard = document.getElementById('link-container') as HTMLElement;
        if (this.currentScrollElementId == 'link-container') {
          if (!this.appService.homeSkillInitialLoad) {
            linkCard.style.transitionDuration = '2s';

            this.appService.homeSkillInitialLoad = true;
          }
          linkCard.style.opacity = '1';
          linkCard.style.marginTop = '0'
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
    this.router.navigate(['experience']);
  }

  goEntertainment() {
    this.router.navigate(['entertainment']);
  }

}
