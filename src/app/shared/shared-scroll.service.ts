import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedScrollService {
  private scrollTrigger = new Subject<void>();
  private scrollTriggerComponent = new Subject<void>();

  scrollTrigger$ = this.scrollTrigger.asObservable();
  scrollTriggerComponent$ = this.scrollTriggerComponent.asObservable();

  private scrollTriggerReviewsComponent = new Subject<void>();
  scrollTriggerReviewsComponent$ = this.scrollTriggerReviewsComponent.asObservable();

  triggerScroll() {
    this.scrollTrigger.next();
  }

  triggerScrollContact(){
    this.scrollTriggerComponent.next();
  }

  triggerScrollReviews(){
    this.scrollTriggerReviewsComponent.next();
  }
}
