import { Component, OnInit } from '@angular/core';

export class TopSkill {
  name: string;
  imgUrl: string;
  constructor(name: string, imgUrl: string) {
    this.name = name;
    this.imgUrl = imgUrl;
  }
}

@Component({
  selector: 'app-top-skills',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  constructor() { }
  
  hoveredIndex: number | null = null;
  
  topSkills: TopSkill[] = [
    
    new TopSkill('React', '../../assets/svg/react.svg'),
    new TopSkill('Angular', '../../assets/svg/angular.svg'),
    new TopSkill('.NET Core', '../../assets/svg/dotnet.svg'),
    new TopSkill('Swift', '../../assets/svg/swift.svg'),
    new TopSkill('MSSQL', '../../assets/svg/mssql.svg'),
    new TopSkill('AWS', '../../assets/svg/aws.svg')
  ]

  ngOnInit(): void {
  }
}
