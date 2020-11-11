import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';
import { NewsState } from '../reducers/news.reducer';

export const selectNewsContext = (state: AppState) => state.news;

export const isFetchingNewsItems = createSelector(
  selectNewsContext,
  (state: NewsState) => state.isLoading
)

export const selectNewsItems = createSelector(
  selectNewsContext,
  (state: NewsState) => state.news
);