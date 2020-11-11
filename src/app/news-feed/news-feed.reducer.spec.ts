import { act } from '@ngrx/effects';
import { FetchNewsSuccess } from './actions/news-feed.actions';
import { newsReducer, initialState } from './news-feed.reducer';

describe('NewsFeed Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = newsReducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('FetchNewsSuccess', () => {
    it('should add news items to state', () => {
      const action = FetchNewsSuccess({ news: [{}] });

      const result = newsReducer(initialState, action);

      expect(result).toEqual({ ...initialState, news: [{}] });
    });
  });
});
