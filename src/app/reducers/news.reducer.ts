import {createReducer, on} from '@ngrx/store';
import { AppState } from '.';
import { FetchNewsSuccess, ToggleLoading } from '../actions/news.actions';
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
  on(ToggleLoading, state => ({...state, isLoading: !state.isLoading})),
  on(FetchNewsSuccess, (state, action) => ({...state, news: action.news}))
);

export const selectNewsContext = (state: AppState) => state.news;

export const selectNewsItems = (state: AppState) => selectNewsContext(state).news;

export const newsReducer = (state, action) => _newsReducer(state,action);