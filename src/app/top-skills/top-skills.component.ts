import { Component, OnInit } from '@angular/core';
import { SkillLink } from '../skills/skills.component';

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
  templateUrl: './top-skills.component.html',
  styleUrls: ['./top-skills.component.css']
})
export class TopSkillsComponent implements OnInit {

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
