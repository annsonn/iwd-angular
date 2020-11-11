import * as fromNews from './news-feed.actions';

describe('NewsFeed Actions', () => {
  it('should return StartLoading', () => {
    expect(fromNews.StartLoading().type).toBe('[NewsFeed] StartLoading');
  });

  it('should return StopLoading', () => {
    expect(fromNews.StopLoading().type).toBe('[NewsFeed] StopLoading');
  });

  it('should return FetchNews', () => {
    expect(fromNews.FetchNews().type).toBe('[NewsFeed] FetchNews');
  });

  it('should return FetchNewsSuccess', () => {
    expect(fromNews.FetchNewsSuccess({ news: [] }).type).toBe(
      '[NewsFeed] FetchNewsSuccess'
    );
  });

  it('should return FetchNewsFailure', () => {
    expect(fromNews.FetchNewsFailure({ error: '' }).type).toBe(
      '[NewsFeed] FetchNewsFailure'
    );
  });
});
