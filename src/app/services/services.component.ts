import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services = [
    {
      imgSrc: 'assets/svg/app-development.svg',
      title: 'Development',
      description: 'From web development to mobile app development, we offer a wide range of services to help you establish a strong online presence.',
    },
    {
      imgSrc: 'assets/svg/operator.svg',
      title: 'Support',
      description: 'We provide top-notch customer support and operational services tailored to your needs.',
    },
    {
      imgSrc: 'assets/svg/hosting.svg',
      title: 'Hosting',
      description: 'Reliable and secure hosting solutions to keep your websites and apps running smoothly.',
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
