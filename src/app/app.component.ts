import { DataService } from './data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  keyword = 'Andular';
  data$: Observable<any[]> = of([]);
  currCode = 'TWD';

  constructor(private svcData: DataService) {
    setTimeout(() => {
      this.currCode = 'JPY';
    }, 2000);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.data$ = this.svcData.loadPosts();
    // .subscribe({
    //   next: (result) => {
    //     this.data = result;
    //   },
    // });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }

  doSearch(str: string): void {
    this.keyword = str;
  }

  doSearchClear(dom: HTMLInputElement): void {
    dom.value = this.keyword = '';
  }

  doDelete(id: number) {
    console.log(`Article ${id} deleted.`);
  }
}
