import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  keyword = 'Andular';
  data: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.get<any[]>('/api/articles.json').subscribe({
      next: (result) => {
        this.data = result;
      },
    });
  }

  doSearch(str: string): void {
    this.keyword = str;
  }

  doSearchClear(dom: HTMLInputElement): void {
    dom.value = this.keyword = '';
  }
}
