import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  sitename = 'Hello World';
  subtitle = '記載著 Will 在網路世界的學習心得與技術分享 !';
  logoid = 'logo';

  constructor() {}

  //this is Hook method (like Event but not equal)
  //Event can be subscribed, Hook can't
  ngOnInit(): void {
    // setTimeout(() => {
    //   this.sitename = 'The Will Will Web';
    // }, 2000);
  }

  changeTitle(event: MouseEvent) {
    console.log(event);
    if (event.altKey) {
      this.sitename = 'The Will Will Web';
    }
  }
}
