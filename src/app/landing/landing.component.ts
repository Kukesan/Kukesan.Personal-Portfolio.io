import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  myName: string = "Ketheeswaran Kukesan";
  displayName: string = '';

  i:number=0;

  constructor(private router:Router) { }

  ngOnInit(): void {
    let timer$ = timer(100,150);
    timer$.subscribe((d)=>{
        this.displayName=this.displayName+ this.myName.charAt(this.i);
        this.i++;
    })

  }

  
  hire() {
     this.router.navigate(['education']);
  }

}
