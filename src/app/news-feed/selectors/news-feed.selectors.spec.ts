import { initialState } from '../news-feed.reducer';
import { newsKey, selectNewsContext } from './news-feed.selectors';

describe('NewsFeed Selectors', () => {
  it('should select the feature state', () => {
    const result = selectNewsContext({
      [newsKey]: initialState,
    });

    expect(result).toEqual(initialState);
  });
});
