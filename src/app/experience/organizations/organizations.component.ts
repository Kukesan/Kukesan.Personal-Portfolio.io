import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var experienceRows = document.getElementsByClassName('experience-row');
    for (var i = 0; i < experienceRows.length; i++) {
      var experienceRow = experienceRows[i] as HTMLElement;
      if (i % 2 == 1) {
        experienceRow.style.float = 'right';
        experienceRow.style.flexDirection= 'row-reverse'
      }else{
        experienceRow.style.float = 'left';
      }
    }
  }

}
