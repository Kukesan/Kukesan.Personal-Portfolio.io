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
    new TopSkill('Angular', 'https://cdn3.iconfinder.com/data/icons/logos-3/250/angular-256.png'),
    new TopSkill('React', 'https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png'),
    new TopSkill('.NET Core', 'https://firebasestorage.googleapis.com/v0/b/portfolio-924c8.appspot.com/o/Source%20Images%2Fnetcore.png?alt=media&token=27d962f1-83ff-474a-a794-a67007b05040'),
    new TopSkill('MSSQL', 'https://firebasestorage.googleapis.com/v0/b/portfolio-924c8.appspot.com/o/Source%20Images%2Fsql.png?alt=media&token=d4c16fd9-ccb5-455f-91a4-d547233e97fe'),
    new TopSkill('Java', 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png'),
    new TopSkill('Swift', 'https://cdn4.iconfinder.com/data/icons/logos-3/1300/swift-seeklogo-512.png')
  ]

  ngOnInit(): void {
  }
}
