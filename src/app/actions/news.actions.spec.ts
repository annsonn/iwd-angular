import * as fromNews from './news.actions';

describe('News Actions', () => {
  it('should return StartLoading', () => {
    expect(fromNews.StartLoading().type).toBe('[News] StartLoading');
  });

  it('should return StopLoading', () => {
    expect(fromNews.StopLoading().type).toBe('[News] StopLoading');
  });

  it('should return FetchNews', () => {
    expect(fromNews.FetchNews().type).toBe('[News] FetchNews');
  });

  it('should return FetchNewsSuccess', () => {
  expect(fromNews.FetchNewsSuccess({news: []}).type).toBe('[News] FetchNewsSuccess');
  });

  it('should return FetchNewsFailure', () => {
    expect(fromNews.FetchNewsFailure({error: ''}).type).toBe('[News] FetchNewsFailure');
});

});
