import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  sitename: string = 'Hello World';

  constructor() {}

  //this is Hook method (like Event but not equal)
  //Event can be subscribed, Hook can't
  ngOnInit(): void {
    setTimeout(() => {
      this.sitename = 'The Will Will Web';
    }, 2000);
  }
}
