import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('hidden', style({ opacity: 0, transform: 'translateX(10px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', [
        animate('800ms ease-out')
      ]),
      transition('visible => hidden', [
        animate('1000ms ease-out')
      ])
    ]),
    trigger('fadeInOutImage', [
      state('hidden', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('hidden => visible', [
        animate('2000ms ease-out')
      ]),
      transition('visible => hidden', [
        animate('2000ms ease-out')
      ])
    ])
  ]
})
export class AboutmeComponent implements OnInit {
  isVisible = false;
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
        }
      },
      { threshold: 0.1 } // Adjust this threshold as needed
    );

    observer.observe(this.el.nativeElement);
  }

}
