import * as fromNews from './news.actions';

describe('FetchNews', () => {
  it('should return an action', () => {
    expect(fromNews.FetchNews().type).toBe('[News] FetchNews');
  });
});
