import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FetchNews } from '../actions/news.actions';
import { AppState } from '../reducers';
import { selectNewsItems } from '../reducers/news.reducer';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  newsItems$ = this.store.select(selectNewsItems);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(FetchNews());
  }
}
