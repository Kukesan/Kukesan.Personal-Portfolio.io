import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

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

  competitions:Competiton[]=[];

  constructor(private http: HttpClient)  { 
  }

  ngOnInit(): void {
    this.loadCompetitions();
    console.log(this.competitions);
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

  loadCompetitions() {
    this.http.get(environment.firebaseConfig.databaseURL+'/competitions.json').subscribe(
      (response: any) => {
        const keys = Object.keys(response);
        keys.forEach((key) => {
          const value = response[key];
          this.competitions.push(value);
        });
      },
      (error) => {
        console.error('Error loading skills:', error);
      }
    );
  }
}
