import { Component, OnInit } from '@angular/core';

export class EntertainmentImage {
  name: string;
  imageUrl: String;
  description: string;
  constructor(name: string, imageUrl: string, description: string) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.description = description;
  }
}

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {

  photographyImagesCol1:EntertainmentImage[]=[
    new EntertainmentImage('','https://i.pinimg.com/originals/3c/64/e9/3c64e901894bb208e8e2aded57f66466.jpg',''),
    new EntertainmentImage('','https://i.pinimg.com/236x/b8/cf/f1/b8cff1c63c71f4e4805522c9f5cafda3.jpg',''),
    new EntertainmentImage('','https://i.pinimg.com/236x/54/94/af/5494affd9b065fe2e17272c2c149f906.jpg','')
  ]

  photographyImagesCol2:EntertainmentImage[]=[
    new EntertainmentImage('','https://i.pinimg.com/236x/69/2d/31/692d316c8e0935d2392df82636ea7459.jpg',''),
    new EntertainmentImage('','https://i.pinimg.com/236x/af/93/f7/af93f772162f12a6557b4b02b5aff97e.jpg',''),
    new EntertainmentImage('','https://i.pinimg.com/236x/40/f6/e1/40f6e14c90ca7dd3bf01f36c89d76cab.jpg',''),
    new EntertainmentImage('','https://i.pinimg.com/236x/c8/63/e9/c863e95a8b9337041385f50c3d4af62a.jpg','')
  ]

  photographyImagesCol3:EntertainmentImage[]=[
    new EntertainmentImage('','https://i.pinimg.com/236x/90/9d/2e/909d2eec96ab44261a1fcca2cefdda8b.jpg',''),
    new EntertainmentImage('','https://i.pinimg.com/236x/43/3d/ba/433dba8f665f46efa325c086c5812a6a.jpg',''),
    new EntertainmentImage('','https://i.pinimg.com/236x/1c/f6/24/1cf6243e99ba8ab24de64ceeed49203e.jpg',''),
    new EntertainmentImage('','https://i.pinimg.com/236x/ad/e3/db/ade3dbec6608ee0714b8cb61d9feb9d9.jpg','')
  ]

  photographyImagesCol4:EntertainmentImage[]=[
    new EntertainmentImage('','https://i.pinimg.com/236x/60/c7/2e/60c72ebf6b0d3d2fa2d10641bfbb9ff3.jpg',''),
    new EntertainmentImage('','https://i.pinimg.com/236x/76/ac/93/76ac9300cf5756c17a7590fa7b96696c.jpg',''),
    new EntertainmentImage('','https://i.pinimg.com/236x/26/85/8a/26858ac9e9bc527f4f1eaa01eb529d5e.jpg',''),
    new EntertainmentImage('','https://i.pinimg.com/236x/1d/4e/3c/1d4e3c0527bd0caca2d6ed0cb73cf224.jpg','')
  ]
  constructor() { }

  ngOnInit(): void {
  }

  

}
