import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NewsState } from '../news-feed.reducer';

export const newsKey = 'news';

export const selectNewsContext = createFeatureSelector<NewsState>(newsKey);

export const isFetchingNewsItems = createSelector(
  selectNewsContext,
  (state: NewsState) => state.isLoading
);

export const selectNewsItems = createSelector(
  selectNewsContext,
  (state: NewsState) => state.news
);

export const getCurrentLanguage = createSelector(
  selectNewsContext,
  (state: NewsState) => state.currentLanguage
);
