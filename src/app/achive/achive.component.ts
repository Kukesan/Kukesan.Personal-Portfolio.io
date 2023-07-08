import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achive',
  templateUrl: './achive.component.html',
  styleUrls: ['./achive.component.css']
})
export class AchiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
}
