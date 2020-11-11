import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { FetchNews } from '../actions/news-feed.actions';
import {
  isFetchingNewsItems,
  selectNewsItems,
} from '../selectors/news-feed.selectors';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {
  isLoading$ = this.store.select(isFetchingNewsItems);
  newsItems$ = this.store.select(selectNewsItems);

  //TODO change this
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(FetchNews());
  }
}
