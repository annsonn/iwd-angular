import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';

import { FetchNews, FetchNewsSuccess, FetchNewsFailure, StartLoading, StopLoading } from '../actions/news.actions';
import { NewsService } from '../services/news.service';

@Injectable()
export class NewsEffects {

  @Effect()
  fetchNews$ = createEffect(() => 
    this.actions$
      .pipe(
        ofType(FetchNews),
        mergeMap(() => this.newsService.fetchNews()
          .pipe(
            map(newsItems => FetchNewsSuccess({news: newsItems})),
          )
        ),
        catchError(errorMessage => of(FetchNewsFailure({error: errorMessage})))
      )
  );

  @Effect()
  startLoading$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(FetchNews),
        map(() => StartLoading())
      )
  );

  @Effect()
  stopLoading$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(FetchNewsSuccess, FetchNewsFailure),
        map(() => StopLoading())
      )
  );
  
  constructor(
    private actions$: Actions, 
    private newsService: NewsService) { }
}
