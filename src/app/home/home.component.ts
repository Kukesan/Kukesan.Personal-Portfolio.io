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

  constructor(){

  }
   ngOnInit(): void {
     
   }
}
