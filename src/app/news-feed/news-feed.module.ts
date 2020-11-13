import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { NewsFeedComponent } from './components/news-feed.component';
import { MaterialModule } from '../material.module';
import { NewsFeedEffects } from './effects/news-feed.effects';
import { StoreModule } from '@ngrx/store';
import { newsReducer } from './news-feed.reducer';
import { newsKey } from './selectors/news-feed.selectors';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/newsfeed/', '.json');
}

@NgModule({
  declarations: [NewsFeedComponent],
  exports: [NewsFeedComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(newsKey, newsReducer),
    EffectsModule.forFeature([NewsFeedEffects]),
    MaterialModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      //isolate: true,
    }),
  ],
})
export class NewsFeedModule {}
