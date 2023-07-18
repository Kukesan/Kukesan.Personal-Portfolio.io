import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    var companies = document.getElementsByClassName('company');
    setTimeout(() => {
      for(var i=0;i<companies.length;i++){
        var company = companies[i] as HTMLElement;
        company.style.opacity = '1';
        company.style.transitionDuration = '1s';
        company.style.marginTop='0';
      }
    }, 50);
  }
}
