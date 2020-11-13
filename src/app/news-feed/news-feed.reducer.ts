import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import {
  FetchNewsSuccess,
  SetLanguage,
  StartLoading,
  StopLoading,
} from './actions/news-feed.actions';
import { NewsData } from './models/news.data';

export interface NewsState {
  isLoading: Boolean | null;
  news: Array<NewsData> | null;
  currentLanguage: string | 'en';
}

export const initialState: NewsState = {
  isLoading: false,
  news: null,
  currentLanguage: 'en',
};

export const newsReducer = createReducer(
  initialState,
  on(StartLoading, (state) => ({ ...state, isLoading: true })),
  on(StopLoading, (state) => ({ ...state, isLoading: false })),
  on(FetchNewsSuccess, (state, { news }) => ({ ...state, news })),
  on(SetLanguage, (state, { lang }) => ({ ...state, currentLanguage: lang }))
);
