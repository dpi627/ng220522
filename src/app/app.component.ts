import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  keyword = 'Andular';

  doSearch(str: string): void {
    this.keyword = str;
  }

  doSearchClear(dom: HTMLInputElement): void {
    dom.value = this.keyword = '';
  }
}
