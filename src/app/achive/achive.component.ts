import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

export class Achive { 
  name : string;
  about : string;
  description : string;
  constructor(name : string, about : string, description : string){
    this.name = name;
    this.about = about;
    this.description = description;
  }
}

@Component({
  selector: 'app-achive',
  templateUrl: './achive.component.html',
  styleUrls: ['./achive.component.css']
})
export class AchiveComponent implements OnInit {

  achives: Achive[] = []

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.loadAchives();
  }

  ngAfterViewInit() {

    var centerElements = document.getElementsByClassName('achive-center');
    var achiveRowDetails = document.getElementsByClassName('achive-container-details');

    var titleUnderline = document.getElementById("title-underline") as HTMLElement;

    setTimeout(() => {
      titleUnderline.style.width = "15%";
      titleUnderline.style.opacity = "1";
      titleUnderline.style.transitionDuration = "3s";
    }, 50);

    setTimeout(() => {

      var j: number = 0;
      for (var i = 0; i < achiveRowDetails.length; i++) {
        var element = achiveRowDetails[i] as HTMLElement;
        element.style.transitionDuration = '1s';
        j = j + 0.4;
        element.style.transitionDelay = j.toString() + 's';
        element.style.opacity = '1';
        // element.style.height = '0';
      }

      for (var i = 0; i < centerElements.length; i++) {
        var element = centerElements[i] as HTMLElement;
        element.style.transitionDuration = '1s';
        element.style.opacity = '1';
      }
    }, 500);
  }

  loadAchives() {
    this.http.get(environment.firebaseConfig.databaseURL+'/achives.json').subscribe(
      (response: any) => {
        const keys = Object.keys(response);
        keys.forEach((key) => {
          const value = response[key];
          this.achives.push(value);
        });
      },
      (error) => {
        console.error('Error loading skills:', error);
      }
    );
  }
}
