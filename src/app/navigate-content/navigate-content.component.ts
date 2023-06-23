import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate-content',
  templateUrl: './navigate-content.component.html',
  styleUrls: ['./navigate-content.component.css']
})
export class NavigateContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    @HostListener('window:scroll', ['$event']) onScrollEvent() {
    setTimeout(() => {
      var content3Left = document.getElementById('content3-left') as HTMLElement;
      var content3Right = document.getElementById('content3-right') as HTMLElement;

      content3Left.style.opacity = '1';
      content3Left.style.transitionDuration = '1s';

      content3Right.style.opacity = '1';
      content3Right.style.transitionDuration = '1s';
      content3Right.style.transitionDelay = '0.3s';

      var content4Left = document.getElementById('content4-left') as HTMLElement;
      var content4Right = document.getElementById('content4-right') as HTMLElement;

      content4Left.style.opacity = '1';
      content4Left.style.transitionDuration = '1s';
      content4Left.style.transitionDelay = '1s';

      content4Right.style.opacity = '1';
      content4Right.style.transitionDuration = '1s';
      content4Right.style.transitionDelay = '1.3s';
    }, 500);
  }
}
