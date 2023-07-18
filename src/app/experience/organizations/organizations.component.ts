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
      new Organization('Volunteer in Design Team of IEEE Computer Society in University of Moratuwa', '', '../../../assets/Images/Experience/cs.png'),
      new Organization('Volunteer in Editorial Team of “Gammeddata IEEE Api-Phase 3” in University of Moratuwa', '', '../../../assets/Images/Experience/ies.png'),
      new Organization('Volunteer in Climathon Jaffna – 2019 ', '[The Organic Movement of North and East (OMNE) in association with various youth organizations]', '../../../assets/Images/Experience/climathon3.png'),
      new Organization('Secretary of Owdatham Tree Planting Organization in 2019', '', '../../../assets/Images/Experience/owdatham4.jpg'),
      new Organization('Member of Interact Club in Jaffna Hindu College in 2016', '', '../../../assets/Images/Jaffna_Hindu_Collge_logo.png'),
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
