import { Component, HostListener, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  currentScrollElementId: string | null = null;
  observer: any = IntersectionObserver;

  ngOnInit() {
  }

  ngAfterViewInit() {

    var titleUnderline = document.getElementById("title-underline") as HTMLElement;

    setTimeout(() => {
      titleUnderline.style.width = "15%";
      titleUnderline.style.opacity = "1";
      titleUnderline.style.transitionDuration = "3s";
    }, 50);
  }
}
