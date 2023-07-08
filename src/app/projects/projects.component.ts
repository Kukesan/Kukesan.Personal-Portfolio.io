import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { timer } from 'rxjs/internal/observable/timer';
import { Subscription } from 'rxjs';

export class Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  constructor(id: number, name: string, description: string, technologies: string[], github: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.technologies = technologies;
    this.github = github;
  }
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('projectAnimation', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('hidden => visible', animate('600ms ease-in'))
    ])
  ]
})
export class ProjectsComponent implements OnInit {

  projectAnimationStates: string[] = [];
  private animationSubscription: Subscription | undefined;

  isInitialLoad = true;

  projects: Project[] = [
    new Project(0, 'Vehicle Rent System', 'This is a project', ['SpringBot', ' Javascript', ' HTML'], 'https://github.com/Kukesan/Vehicle-Rent-System.git'),
    new Project(1, 'Document Management System – 2nd Year Industry Project', 'We develop a system for addressing manipulation of documents for an organization with the use of web application. Role Full-Stack Developer [ system initialization module, Issue Report, User management and designing of dashboard ]', ['.NET Core', ' Angular', ' MSSQL'], ''),
    new Project(2, 'Login System', 'This is a project', ['.NET Core MVC Architecture'], 'https://github.com/Kukesan/LoginProject.git'),
    new Project(3, 'Personal Website-Frontend', 'This is a project', ['HTML', ' CSS'], 'https://github.com/Kukesan/Personal_Website-Frontend.git'),
    new Project(4, 'Plant Hub-Web Page Group Project', 'This is a project', ['PHP', ' MySQL', ' Javascript', ' HTML', ' CSS'], 'https://github.com/Kukesan/Plant_Hub-Web_Page_Group_Project.git'),
    new Project(5, 'Elasticities Economics', 'This is a project', ['C Language'], 'https://github.com/Kukesan/Elasticities-Economics.git'),
    new Project(6, 'Vanila JS Calculator', 'This is a project', ['Javascript', ' HTML', ' CSS'], 'https://github.com/Kukesan/Vanila-JS-Calculator.git'),
    new Project(7, 'Bank Secure Vault Door – 1 st Year Hardware Group Project', 'To design and develop Highly secured Bank vault room door which can prevent any kind of unauthorized access.', ['C language', ' Atmega32', ' Sensors'], '')
  ]

  constructor() {
    this.animationSubscription = undefined;
  }

  ngOnInit(): void {
    this.projects.forEach(() => this.projectAnimationStates.push('hidden'));
  }

  ngAfterViewInit() {

    var titleUnderline = document.getElementById("title-underline") as HTMLElement;

    setTimeout(() => {
      titleUnderline.style.width = "15%";
      titleUnderline.style.opacity = "1";
      titleUnderline.style.transitionDuration = "3s";
    }, 50);

    let j = 0;
    if (this.isInitialLoad) {
      this.animationSubscription = timer(0, 250).subscribe(() => {
        if (j < this.projectAnimationStates.length) {
          this.projectAnimationStates[j] = 'visible';
          j++;
        } else {
          this.stopAnimation();
        }
      });
      this.isInitialLoad = false; // Set flag to false after initial load
      console.log("Initial load");
    }
  }

  stopAnimation(): void {
    if (this.animationSubscription) {
      this.animationSubscription.unsubscribe();
    }
  }

  goGitHub(url: string) {
    window.open(url, "_blank");
  }

}
