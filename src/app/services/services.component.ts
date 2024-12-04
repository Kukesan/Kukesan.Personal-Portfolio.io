import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('hidden', style({ opacity: 0, transform: 'translateY(10px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', [
        animate('1000ms ease-out')
      ]),
      transition('visible => hidden', [
        animate('1000ms ease-out')
      ])
    ])
  ]
})
export class ServicesComponent implements OnInit {
  services = [
    {
      imgSrc: 'assets/svg/app-development.svg',
      title: 'Web & Mobile Development',
      description: 'Creating Responsive Websites and Apps for seamless User Experiences across all devices.',
    },
    {
      imgSrc: 'assets/svg/operator.svg',
      title: 'IT Consulting',
      description: 'Expert advice to optimize Technology, enhance Efficiency and Achieve your Business Goals.',
    },
    {
      imgSrc: 'assets/svg/hosting.svg',
      title: 'Hosting',
      description: 'Secure, Fast and Scalable Hosting Solutions with 24/7 Support for uninterrupted Online Presence.',
    },
  ];
  
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
