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

  hoveredIndex: number | null = null;




  skillLinks: SkillLink[] = [
    new SkillLink("Git Hub", "https://github.com/Kukesan", "https://img.icons8.com/?size=512&id=3tC9EQumUAuq&format=png"),
    new SkillLink("Hacker Rank", "https://www.hackerrank.com/K_Kukesan?hr_r=1", "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-512.png"),
    new SkillLink("Pinterest", "https://www.pinterest.com/K_Kukesan/_saved/", "https://www.freepnglogos.com/uploads/pinterest-logo-p-png-0.png"),
    new SkillLink("Solo Learn", "https://www.linkedin.com/in/ketheeswaran-kukesan/", "https://seeklogo.com/images/S/sololearn-logo-98C11BA785-seeklogo.com.png"),
    new SkillLink("Kaggle", "https://www.linkedin.com/in/ketheeswaran-kukesan/", "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/189_Kaggle_logo_logos-512.png")
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
  overlayStyles(index: number) {
    // const overlayColor = this.isMouseOver ? 'rgba(255, 255, 255, 0.7)' : 'transparent';
    console.log(this.hoveredIndex)
    if (this.hoveredIndex === index) {
      console.log("gg"+this.hoveredIndex)
      return {
        // 'background-color': overlayColor,
        'background-color': 'rgba(255, 255, 255, 0.7)',
        'transition-duration':'0.2s'
        /* Add any other overlay styles you want to change here */
      };
    }
    // Return an empty object when not hovered, so no overlay is applied
    return {};
  }

  overlayButton(index:number){
    if (this.hoveredIndex === index) {
      return {
        'opacity':'1',
        'transition-duration':'0.2s'
      };
    }
    return {};
  }


  onMouseEnter(index: number) {
    this.hoveredIndex = index;
  }

  onMouseLeave() {
    this.hoveredIndex = null;
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
