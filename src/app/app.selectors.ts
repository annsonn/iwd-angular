import { createFeatureSelector, createSelector } from '@ngrx/store';
import { appKey, AppState } from './app.reducer';

export const appContext = createFeatureSelector<AppState>(appKey);

export const getCurrentLanguage = createSelector(
  appContext,
  (state: AppState) => state.currentLanguage
);
