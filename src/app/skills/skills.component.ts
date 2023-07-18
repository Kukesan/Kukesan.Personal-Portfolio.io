import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Subscription, timer } from 'rxjs';

export class SkillLink {
  name: string;
  link: string;
  icon: string;
  constructor(name: string, link: string, icon: string) {
    this.name = name;
    this.link = link;
    this.icon = icon;
  }
}

export class Skill {
  name: string;
  options: string[];
  constructor(name: string, options: string[]) {
    this.name = name;
    this.options = options;
  }
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('skillLinkAnimation', [
      state('hidden', style({
        opacity: 0,
        transform: 'scale(0.95)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('hidden => visible', animate('1000ms ease-in'))
    ]),
    trigger('skillAnimation', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(10px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('hidden => visible', animate('1000ms ease-in'))
    ])
  ]
})
export class SkillsComponent implements OnInit {

  skillLinkAnimationStates: string[] = [];
  private skillLinkAnimationSubscription: Subscription | undefined;

  skillAnimationStates: string[] = [];

  skillLinks: SkillLink[] = [
    new SkillLink("Git Hub", "https://github.com/Kukesan", "https://live.staticflickr.com/65535/53054599762_6fe632260f_n.jpg"),
    new SkillLink("Hacker Rank", "https://www.hackerrank.com/K_Kukesan?hr_r=1", "https://live.staticflickr.com/65535/53055189741_4d84135af4_n.jpg"),
    new SkillLink("Pinterest", "https://www.pinterest.com/K_Kukesan/_saved/", "https://live.staticflickr.com/65535/53055190236_be696ef876.jpg"),
    new SkillLink("Solo Learn", "https://www.linkedin.com/in/ketheeswaran-kukesan/", "https://live.staticflickr.com/65535/53055190476_127d83f778.jpg"),
    new SkillLink("Kaggle", "https://www.linkedin.com/in/ketheeswaran-kukesan/", "https://live.staticflickr.com/65535/53055563985_b9db2ae4ef_c.jpg")
  ]

  skills: Skill[] = [
    new Skill("Programming Skills", ["C", "Java", "Python"]),
    new Skill("Mobile Development", ["Swift", "Kodular"]),
    new Skill("Web Development", ["HTML", "CSS", "JavaScript", "TypeScript", ".NET Core", "PHP", "Bootstrap"]),
    new Skill('IDEs', ["Visual Studio Code", "Visual Studio", "IntelliJ IDEA", "PyCharm", "Xcode"]),
    new Skill("Frameworks", ["Angular"]),
    new Skill("Databases", ["MySQL", "Firebase", "MS SQL Server"]),
    new Skill('Version Control', ["Git", "GitHub", "SourceTree", "BitBucket"]),
    new Skill('Operating Systems', ["Windows", "Linux", "Mac OS", "Android", "iOS"]),
    new Skill("Graphics", ["Adobe Photoshop", "Adobe Lightroom", 'SketchUp'])
  ]

  constructor() {
    this.skillLinkAnimationSubscription = undefined;
  }

  ngOnInit(): void {
    this.skillLinks.forEach(() => this.skillLinkAnimationStates.push('hidden'));
    this.skills.forEach(() => this.skillAnimationStates.push('hidden'));
  }

  ngAfterViewInit() {
    var titleUnderline = document.getElementById("title-underline") as HTMLElement;

    setTimeout(() => {
      titleUnderline.style.width = "15%";
      titleUnderline.style.opacity = "1";
      titleUnderline.style.transitionDuration = "3s";
    }, 50);

    let j = 0;
    this.skillLinkAnimationSubscription = timer(0, 250).subscribe(() => {
      if (j < this.skillLinkAnimationStates.length) {
        this.skillLinkAnimationStates[j] = 'visible';
        j++;
      } else {
        this.stopAnimation();
        for (let i = 0; i < this.skills.length; i++) {
          this.skillAnimationStates[i] = 'visible';
        }
      }
    });
  }

  stopAnimation(): void {
    if (this.skillLinkAnimationSubscription) {
      this.skillLinkAnimationSubscription.unsubscribe();
    }
  }

  goLink(link: string): void {
    window.open(link, "_blank");
  }
}
