import { ActionReducerMap, createReducer, MetaReducer } from '@ngrx/store';
import { environment } from '../environments/environment';

export interface AppState {}

export const initialState: AppState = {};

export const reducers: ActionReducerMap<AppState> = createReducer(initialState);

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
