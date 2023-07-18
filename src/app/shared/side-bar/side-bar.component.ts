import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedScrollService } from '../shared-scroll.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private router: Router, private sharedScrollService: SharedScrollService) { }

  ngOnInit(): void {
  }

  scrollToNavigateContact() {
    this.router.navigate(['/home']).then(() => {
      this.sharedScrollService.triggerScrollContact();
    });
  }

  scrollToNavigateReviews() {
    this.router.navigate(['/home']).then(() => {
      this.sharedScrollService.triggerScrollReviews();
    });
  }
}
