import { createAction, props } from '@ngrx/store';

export const StartLoading = createAction('[News] StartLoading');
export const StopLoading = createAction('[News] StopLoading');
export const FetchNews = createAction('[News] FetchNews');
export const FetchNewsSuccess = createAction('[News] FetchNewsSuccess', props<{news: any}>());
export const FetchNewsFailure = createAction('[News] FetchNewsFailure', props<{error: any}>());