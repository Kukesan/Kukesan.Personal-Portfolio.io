import { HttpClient } from '@angular/common/http';
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

  organizations: Organization[]=[];

  constructor(private http:HttpClient) { 
  }

  ngOnInit(): void {
    this.loadOrganizations();
  }

  loadOrganizations() {
    this.http.get('https://portfolio-924c8-default-rtdb.firebaseio.com/organizations.json').subscribe(
      (response: any) => {
        const keys = Object.keys(response);
        keys.forEach((key) => {
          const value = response[key];
          this.organizations.push(value);
        });
      },
      (error) => {
        console.error('Error loading skills:', error);
      }
    );
  }
}
