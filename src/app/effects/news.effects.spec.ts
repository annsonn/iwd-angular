import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { NewsService } from '../services/news.service';

import { NewsEffects } from './news.effects';

describe('NewsEffects', () => {
  let actions$: Observable<any>;
  let effects: NewsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NewsEffects,
        provideMockActions(() => actions$),
        {
          provide: NewsService,
          useValue: jasmine.createSpyObj('newsService', ['fetchNews'])
        }
      ]
    });

    effects = TestBed.inject(NewsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
