import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-dashboard-projects',
  templateUrl: './dashboard-projects.component.html',
  styleUrls: ['./dashboard-projects.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })),
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
export class DashboardProjectsComponent implements OnInit {

  projects = [
    {
      imgSrc: 'https://live.staticflickr.com/65535/54174645923_d27143254e_z.jpg',
      title: 'A2Z Cleaning Group',
      description: 'At A2Z Clean Group, we meticulously select our team members, ensuring they possess the necessary qualifications to meet our stringent standards.',
    },
    {
      imgSrc: 'https://live.staticflickr.com/65535/54174372796_7afabb949d_z.jpg',
      title: 'Zie Engineering',
      description: 'At Zie Engineering, we excel in delivering high-quality, precise, and innovative CNC machined parts that meet the diverse needs of our clients.',
    },
    {
      imgSrc: 'https://live.staticflickr.com/65535/54174672208_ac4f0587bd_z.jpg',
      title: 'Tamil Literary Assocition - UOM',
      description: 'The Tamil Literary Association webpage serves as a digital platform to showcase the association history, objectives, and activities.',
    },
    {
      imgSrc: 'https://live.staticflickr.com/65535/54174672373_623e6221e7_z.jpg',
      title: 'Document Management System',
      description: 'This Application for particular Organizations with the features like document manipulations, role-based access, User authentications, OCR and Barcode features.',
    },
  ]

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
