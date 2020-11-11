import { createAction, props } from '@ngrx/store';

export const StartLoading = createAction('[NewsFeed] StartLoading');
export const StopLoading = createAction('[NewsFeed] StopLoading');
export const FetchNews = createAction('[NewsFeed] FetchNews');
export const FetchNewsSuccess = createAction(
  '[NewsFeed] FetchNewsSuccess',
  props<{ news: any }>()
);
export const FetchNewsFailure = createAction(
  '[NewsFeed] FetchNewsFailure',
  props<{ error: any }>()
);
