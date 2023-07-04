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
    var achiveRow1 = document.getElementById('achive-row1') as HTMLElement;
    var achiveRow2 = document.getElementById('achive-row2') as HTMLElement;
    var achiveRow3 = document.getElementById('achive-row3') as HTMLElement;
    var achiveRow4 = document.getElementById('achive-row4') as HTMLElement;

    var centerElements = document.getElementsByClassName('achive-center');
    var achiveRowDetails = document.getElementsByClassName('achive-container-details');

    setTimeout(() => {
      // achiveRow1.style.transitionDuration = '1s';
      // achiveRow1.style.opacity = '1';
      // achiveRow1.style.transitionDelay = '0.2s';
      // achiveRow1.style.marginTop = '8px';

      // achiveRow2.style.transitionDuration = '1s';
      // achiveRow2.style.opacity = '1';
      // achiveRow2.style.transitionDelay = '0.6s';
      // achiveRow2.style.marginTop = '8px';

      // achiveRow3.style.transitionDuration = '1s';
      // achiveRow3.style.opacity = '1';
      // achiveRow3.style.transitionDelay = '1s';
      // achiveRow3.style.marginTop = '8px';

      // achiveRow4.style.transitionDuration = '1s';
      // achiveRow4.style.opacity = '1';
      // achiveRow4.style.transitionDelay = '1.4s';
      // achiveRow4.style.marginTop = '8px';

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
