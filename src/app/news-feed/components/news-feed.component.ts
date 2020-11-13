import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { FetchNews, SetLanguage } from '../actions/news-feed.actions';
import { NewsState } from '../news-feed.reducer';
import {
  isFetchingNewsItems,
  selectNewsItems,
} from '../selectors/news-feed.selectors';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit, OnChanges {
  isLoading$ = this.store.select(isFetchingNewsItems);
  newsItems$ = this.store.select(selectNewsItems);
  @Input() lang: string;

  constructor(
    private readonly store: Store<NewsState>,
    private readonly translate: TranslateService
  ) {}

  ngOnChanges(changes) {
    this.store.dispatch(SetLanguage({ lang: changes.lang.currentValue }));
    this.translate.use(changes.lang.currentValue);
  }

  ngOnInit(): void {
    this.store.dispatch(FetchNews());
  }
}
