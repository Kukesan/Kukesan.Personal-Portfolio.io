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
    new SkillLink("Git Hub", "https://github.com/Kukesan", "https://img.icons8.com/?size=512&id=3tC9EQumUAuq&format=png"),
    new SkillLink("Hacker Rank", "https://www.hackerrank.com/K_Kukesan?hr_r=1", "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-512.png"),
    new SkillLink("Pinterest", "https://www.pinterest.com/K_Kukesan/_saved/", "https://www.freepnglogos.com/uploads/pinterest-logo-p-png-0.png"),
    new SkillLink("Solo Learn", "https://www.linkedin.com/in/ketheeswaran-kukesan/", "https://seeklogo.com/images/S/sololearn-logo-98C11BA785-seeklogo.com.png"),
    new SkillLink("Kaggle", "https://www.linkedin.com/in/ketheeswaran-kukesan/", "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/189_Kaggle_logo_logos-512.png")
  ]

  ngOnInit(): void {
  }

  overlayStyles(index: number) {
    // const overlayColor = this.isMouseOver ? 'rgba(255, 255, 255, 0.7)' : 'transparent';
    console.log(this.hoveredIndex)
    if (this.hoveredIndex === index) {
      console.log("gg"+this.hoveredIndex)
      return {
        // 'background-color': overlayColor,
        'background-color': 'rgba(255, 255, 255, 0.7)',
        'transition-duration':'0.2s'
        /* Add any other overlay styles you want to change here */
      };
    }
    // Return an empty object when not hovered, so no overlay is applied
    return {};
  }

  overlayButton(index:number){
    if (this.hoveredIndex === index) {
      return {
        'opacity':'1',
        'transition-duration':'0.2s'
      };
    }
    return {};
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
