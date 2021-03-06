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
  counter = 0;

  constructor() {}

  //this is Hook method (like Event but not equal)
  //Event can be subscribed, Hook can't
  ngOnInit(): void {
    // setTimeout(() => {
    //   this.sitename = 'The Will Will Web';
    // }, 2000);
  }

  // event 型別如果不確定，可用 console.log(event) 輸出，F12 觀察取得
  changeTitle(event: MouseEvent) {
    this.counter++;
    console.log(event);
    if (event.altKey) {
      this.sitename = 'The Will Will Web';
    }
  }
}
