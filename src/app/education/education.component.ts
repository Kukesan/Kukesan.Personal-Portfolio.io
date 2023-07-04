import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  currentScrollElementId: string | null = null;
  observer: any = IntersectionObserver;

  ngOnInit(): void {
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.currentScrollElementId = entry.target.id;
        if (this.currentScrollElementId == 'education-row1') {
          var educationMainImage = document.getElementById('education-main-img') as HTMLElement;
          var educationTitle = document.getElementById('education-title') as HTMLElement;

          var verticalLine = document.getElementById('vl') as HTMLElement;
          var dot1 = document.getElementById('dot1') as HTMLElement;
          var dot2 = document.getElementById('dot2') as HTMLElement;
          var dot3 = document.getElementById('dot3') as HTMLElement;

          var educationRow1 = document.getElementById('education-row1') as HTMLElement;
          var educationRow2 = document.getElementById('education-row2') as HTMLElement;
          var educationRow3 = document.getElementById('education-row3') as HTMLElement;

          educationMainImage.style.opacity = '1';
          educationMainImage.style.transitionDuration = '1s';

          educationTitle.style.opacity = '1';
          educationTitle.style.transitionDuration = '1s';
          educationTitle.style.transitionDelay = '0.3s';

          verticalLine.style.height = '100%';
          verticalLine.style.transitionDuration = '2.4s';

          dot1.style.opacity = '1';
          dot1.style.transitionDelay = '0.4s'
          dot1.style.transitionDuration = '0.2s'

          dot2.style.opacity = '1';
          dot2.style.transitionDelay = '0.8s'
          dot2.style.transitionDuration = '0.2s'

          dot3.style.opacity = '1';
          dot3.style.transitionDelay = '1.2s'
          dot3.style.transitionDuration = '0.2s'

          educationRow1.style.opacity = '1';
          educationRow1.style.marginLeft = '0';
          educationRow1.style.transitionDuration = '0.4s'
          educationRow1.style.transitionDelay = '0.4s'

          educationRow2.style.opacity = '1';
          educationRow2.style.marginLeft = '0';
          educationRow2.style.transitionDuration = '0.4s'
          educationRow2.style.transitionDelay = '0.8s'

          educationRow3.style.opacity = '1';
          educationRow3.style.marginLeft = '0';
          educationRow3.style.transitionDuration = '0.4s'
          educationRow3.style.transitionDelay = '1.2s'
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
}
