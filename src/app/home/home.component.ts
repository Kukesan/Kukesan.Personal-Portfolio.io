import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { of, timer } from 'rxjs';
import { concatMap, delay, map, tap } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myName: string = "Ketheeswaran Kukesan";
  displayName: string = '';

  i:number=0;

  constructor(private router:Router) { }

  ngOnInit(): void {
    let timer$ = timer(200,300);
    timer$.subscribe((d)=>{
      console.log("intime")
        this.displayName=this.displayName+ this.myName.charAt(this.i);
        this.i++;
    })

  }

  
  hire() {
     this.router.navigate(['contact']);
  }
}
