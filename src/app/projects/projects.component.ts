import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { timer } from 'rxjs/internal/observable/timer';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class Project {
  name: string;
  description: string;
  technologies: string[];
  github: string;
  constructor(name: string, description: string, technologies: string[], github: string) {
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

  projects: Project[] = [];

  constructor(private http: HttpClient) { 
    this.animationSubscription = undefined;
  }

  ngOnInit(): void {
    this.loadProjects();
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

  loadProjects() {
    this.http.get('https://portfolio-924c8-default-rtdb.firebaseio.com/projects.json').subscribe(
      (response: any) => {
        const keys = Object.keys(response);
        keys.forEach((key) => {
          const value = response[key];
          this.projects.push(value);
        });
      },
      (error) => {
        console.error('Error loading skills:', error);
      }
    );
  }

  goGitHub(url: string) {
    window.open(url, "_blank");
  }

}
