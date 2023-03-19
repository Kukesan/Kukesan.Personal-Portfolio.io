import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  skillSubjectVisible(value:number){
    var displaySubject = <HTMLElement>document.getElementById("skill-sub"+value)
    displaySubject.style.display = "block"
    displaySubject.style.transitionDuration = "0.3s"
  }

  skillSubjectNotVisible(value:number){
    var displaySubject = <HTMLElement>document.getElementById("skill-sub"+value)
    displaySubject.style.display = "none"
    displaySubject.style.transition = "0.3s"
  }
}
