import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // goHome(){
  //   this.router.navigate(['home']);
  // }
  // goInfo(){
  //   this.router.navigate(['info']);
  // }
  // goEducation(){
  //   this.router.navigate(['education']);
  // }
  // goExperience(){
  //   this.router.navigate(['experience']);
  // }
  // goAchive(){
  //   this.router.navigate(['achive']);
  // }
  // goProject(){
  //   this.router.navigate(['project'])
  // }
}
