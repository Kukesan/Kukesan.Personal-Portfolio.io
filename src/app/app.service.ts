import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  introInitialLoad: boolean = false;
  experienceInitialLoad: boolean = false;
  educationInitialLoad: boolean = false;
  entertainmentInitialLoad: boolean = false;
  contactInitialLoad: boolean = false;
  constructor() { }


}
