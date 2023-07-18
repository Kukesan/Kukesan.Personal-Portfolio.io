import { Component, OnInit } from '@angular/core';

export class Organization {
  heading: string;
  subject: string;
  imageUrl: string;
  constructor(heading: string, subject: string, imageUrl: string) {
    this.heading = heading;
    this.subject = subject;
    this.imageUrl = imageUrl;
  }
}

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

  organizations: Organization[];

  constructor() { 
    this.organizations = [
      new Organization('Volunteer in Design Team of IEEE Computer Society in University of Moratuwa', '', 'https://live.staticflickr.com/65535/53055707903_0f803636ee.jpg'),
      new Organization('Volunteer in Editorial Team of “Gammeddata IEEE Api-Phase 3” in University of Moratuwa', '', 'https://live.staticflickr.com/65535/53055229696_55378e3910.jpg'),
      new Organization('Volunteer in Climathon Jaffna – 2019 ', '[The Organic Movement of North and East (OMNE) in association with various youth organizations]', 'https://live.staticflickr.com/65535/53055709393_2dd402d02d_m.jpg'),
      new Organization('Secretary of Owdatham Tree Planting Organization in 2019', '', 'https://live.staticflickr.com/65535/53054638977_0b0546996c_w.jpg'),
      new Organization('Member of Interact Club in Jaffna Hindu College in 2016', '', 'https://live.staticflickr.com/65535/53055665278_3bf6fd6822_n.jpg'),
    ]
  }

  ngOnInit(): void {
    setTimeout(() => {
      var organizationRows = document.getElementsByClassName('organization-row');
      for (var i = 0; i < organizationRows.length; i++) {
        var organizationRow = organizationRows[i] as HTMLElement;
        organizationRow.style.opacity='0';
        if (i % 2 == 1) {
          organizationRow.style.float = 'right';
          organizationRow.style.flexDirection = 'row-reverse'
          organizationRow.style.marginRight='-10px'
        } else {
          organizationRow.style.float = 'left';
          organizationRow.style.marginLeft= '-10px'
        }
      }
    }, 5);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      var organizationRows = document.getElementsByClassName('organization-row');
      for (var i = 0; i < organizationRows.length; i++) {
        var organizationRow = organizationRows[i] as HTMLElement;
        organizationRow.style.transitionDuration= '1s';
        organizationRow.style.opacity='1';
        if (i % 2 == 1) {
          organizationRow.style.marginRight='0'
        } else {
          organizationRow.style.marginLeft= '0'
        }
      }
    }, 50);
  }
}
