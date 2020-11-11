import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import {
  FetchNews,
  FetchNewsFailure,
  FetchNewsSuccess,
  StartLoading,
  StopLoading,
} from '../actions/news-feed.actions';
import { NewsFeedService } from '../services/news-feed.service';

import { NewsFeedEffects } from './news-feed.effects';

describe('NewsFeedEffects', () => {
  let actions$: Observable<any>;
  let effects: NewsFeedEffects;
  let newsService: jasmine.SpyObj<NewsFeedService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('NewsService', ['fetchNews']);

    TestBed.configureTestingModule({
      providers: [
        NewsFeedEffects,
        provideMockActions(() => actions$),
        { provide: NewsFeedService, useValue: spy },
      ],
    });

    effects = TestBed.inject(NewsFeedEffects);
    newsService = TestBed.inject(NewsFeedService) as jasmine.SpyObj<
      NewsFeedService
    >;
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should fetch news and dispatch success with news items', (done) => {
    const newsItems = [{ id: 1 }];

    newsService.fetchNews.and.returnValue(of(newsItems));

    actions$ = of(FetchNews());

    effects.fetchNews$.subscribe((action) => {
      expect(action).toEqual(FetchNewsSuccess({ news: [{ id: 1 }] }));
      done();
    });
  });

  it('should fetch news and dispatch failure on error', (done) => {
    newsService.fetchNews.and.returnValue(throwError('error'));

    actions$ = of(FetchNews());

    effects.fetchNews$.subscribe((action) => {
      expect(action).toEqual(FetchNewsFailure({ error: 'error' }));
      done();
    });
  });

  it('should start loading on fetch news', (done) => {
    actions$ = of(FetchNews());

    effects.startLoading$.subscribe((action) => {
      expect(action).toEqual(StartLoading());
      done();
    });
  });

  it('should stop loading on fetch news successs', (done) => {
    actions$ = of(FetchNewsSuccess({ news: [{}] }));

    effects.stopLoading$.subscribe((action) => {
      expect(action).toEqual(StopLoading());
      done();
    });
  });
});
