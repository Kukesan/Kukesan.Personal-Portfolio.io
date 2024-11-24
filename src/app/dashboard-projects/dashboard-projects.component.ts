import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-projects',
  templateUrl: './dashboard-projects.component.html',
  styleUrls: ['./dashboard-projects.component.scss']
})
export class DashboardProjectsComponent implements OnInit {

  projects = [
    {
      imgSrc: 'assets/svg/app-developm',
      title: 'Development',
      description: 'From web development to mobile app development, we offer a wide range of services to help you establish a strong online presence.',
    },
    {
      imgSrc: 'assets/svg/operator.sv',
      title: 'Support',
      description: 'We provide top-notch customer support and operational services tailored to your needs.',
    },
    {
      imgSrc: 'assets/svg/hosting.sv',
      title: 'Hosting',
      description: 'Reliable and secure hosting solutions to keep your websites and apps running smoothly.',
    },
    {
      imgSrc: 'assets/svg/hosting.sv',
      title: 'Hosting',
      description: 'Reliable and secure hosting solutions to keep your websites and apps running smoothly.',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
