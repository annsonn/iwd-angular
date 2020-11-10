import {createReducer, createSelector, on} from '@ngrx/store';
import { AppState } from '.';
import { FetchNewsSuccess, StartLoading, StopLoading } from '../actions/news.actions';
import { NewsData } from '../models/news.data';

export interface NewsState {
  isLoading: Boolean | null;
  news: Array<NewsData> | null;
}

export const initialState = {
  isLoading: false,
  news: null,
};

const _newsReducer = createReducer(
  initialState,
  on(StartLoading, state => ({...state, isLoading: true})),
  on(StopLoading, state => ({...state, isLoading: false})),
  on(FetchNewsSuccess, (state, action) => ({...state, news: action.news}))
);

export const selectNewsContext = (state: AppState) => state.news;

export const selectNewsItems = createSelector(
  selectNewsContext,
  (state: NewsState) => state.news
);

export const newsReducer = (state, action) => _newsReducer(state,action);