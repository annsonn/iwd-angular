import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { FetchNews, FetchNewsSuccess } from '../actions/news.actions';
import { NewsService } from '../services/news.service';

import { NewsEffects } from './news.effects';

describe('NewsEffects', () => {
  let actions$: Observable<any>;
  let effects: NewsEffects;
  let newsService: jasmine.SpyObj<NewsService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('NewsService', ['fetchNews']);

    TestBed.configureTestingModule({
      providers: [
        NewsEffects,
        provideMockActions(() => actions$),
        { provide: NewsService, useValue: spy }
      ]
    });

    effects = TestBed.inject(NewsEffects);
    newsService = TestBed.inject(NewsService) as jasmine.SpyObj<NewsService>;
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should fetch news and dispatch success with news items', (done) => {
    const newsItems = [{ id: 1 }];

    newsService.fetchNews.and.returnValue(of(newsItems));

    actions$ = of(FetchNews());

    effects.fetchNews$.subscribe((action) => {
      expect(action).toEqual(FetchNewsSuccess({news: [{id: 1}]}));
      done();
    });
  });
});
