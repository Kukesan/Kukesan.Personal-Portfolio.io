import { Component, OnInit } from '@angular/core';
import { SkillLink } from '../skills/skills.component';

@Component({
  selector: 'app-home-skills',
  templateUrl: './home-skills.component.html',
  styleUrls: ['./home-skills.component.css']
})
export class HomeSkillsComponent implements OnInit {

  constructor() { }

  hoveredIndex: number | null = null;
  
  skillLinks: SkillLink[] = [
    new SkillLink("Linkedin", "https://www.linkedin.com/in/kukesan/", "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"),
    new SkillLink("Git Hub", "https://github.com/Kukesan", "https://img.icons8.com/?size=512&id=3tC9EQumUAuq&format=png"),
    new SkillLink("Hacker Rank", "https://www.hackerrank.com/K_Kukesan?hr_r=1", "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-512.png"),
    new SkillLink("Pinterest", "https://www.pinterest.com/K_Kukesan/_saved/", "https://www.freepnglogos.com/uploads/pinterest-logo-p-png-0.png")
  ]

  ngOnInit(): void {
  }

  onMouseEnter(index: number) {
    this.hoveredIndex = index;
  }

  onMouseLeave() {
    this.hoveredIndex = null;
  }

  goLink(link: string): void {
    window.open(link, "_blank");
  }
}
