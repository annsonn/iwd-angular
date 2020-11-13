import { createAction, props } from '@ngrx/store';

export const SetLanguage = createAction(
  '[App] SetLanguage',
  props<{ lang: string }>()
);
