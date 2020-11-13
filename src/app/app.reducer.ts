import { ActionReducer, createReducer, on } from '@ngrx/store';
import { SetLanguage } from './app.actions';

export const supportedLanguages = ['en', 'fr'];

export interface AppState {
  currentLanguage: string | null;
}

export const appKey = 'app';

const defaultLanguage = 'en';

export const initialState: AppState = {
  currentLanguage: defaultLanguage,
};

export const appReducer: ActionReducer<AppState> = createReducer(
  initialState,
  on(SetLanguage, (state: AppState, { lang }) => ({
    ...state,
    currentLanguage: supportedLanguages.includes(lang) ? lang : defaultLanguage,
  }))
);

export const reducers = {
  [appKey]: appReducer,
};
