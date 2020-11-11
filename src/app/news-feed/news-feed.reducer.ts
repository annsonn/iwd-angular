import { createReducer, on } from '@ngrx/store';
import {
  FetchNewsSuccess,
  StartLoading,
  StopLoading,
} from './actions/news-feed.actions';
import { NewsData } from '../models/news.data';

export interface NewsState {
  isLoading: Boolean | null;
  news: Array<NewsData> | null;
}

export const initialState: NewsState = {
  isLoading: false,
  news: null,
};

const _newsReducer = createReducer(
  initialState,
  on(StartLoading, (state) => ({ ...state, isLoading: true })),
  on(StopLoading, (state) => ({ ...state, isLoading: false })),
  on(FetchNewsSuccess, (state, { news }) => ({ ...state, news }))
);

export const newsReducer = (state, action) => _newsReducer(state, action);
