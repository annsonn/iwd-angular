import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { getCurrentLanguage } from '../app.selectors';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent {
  lang$ = this.store.select(getCurrentLanguage);
  constructor(private readonly store: Store<AppState>) {}
}
