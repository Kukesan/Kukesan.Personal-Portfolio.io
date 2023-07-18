import { Component, OnInit } from '@angular/core';

export class Competiton{
  name:string;
  description:string;
  constructor(name:string,description:string){
    this.name = name;
    this.description = description;
  }
}

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {

  competitions:Competiton[];

  constructor() { 
    this.competitions = [
      new Competiton('Google Hash Code 2021,2022','Organized by Google'),
      new Competiton('Hacktitude 2022','Web Development Competition organized by 99X'),
      new Competiton('MoraSpirit Chess Championship 2022','Organized by Moraspirit in University of Moratuwa'),
      new Competiton('MoraXtreme 2020,2021','Inter University Hackathon Organized by Computer Society of IEEE in University of Moratuwa'),
      new Competiton('BenchMark 2021','UI/UX Design Competition organized by AIESEC in SLIIT'),
      new Competiton('HackMoral 4.0 - 2021','Mini Hackathon Organized by INTECS, Faculty of Information Technology, University of Moratuwa'),
      new Competiton('Decode 1.0','Hackathon Organized by ACM Student Chapter in University of Moratuwa'),
    ]
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      var competitonsClass = document.getElementsByClassName('competition');
      for(var i=0;i<competitonsClass.length;i++){
        var competiton = competitonsClass[i] as HTMLElement;
        competiton.style.opacity = '1';
        competiton.style.marginTop = '0';
        competiton.style.transitionDuration = '1s';
      }
    }, 50);
  }
}
