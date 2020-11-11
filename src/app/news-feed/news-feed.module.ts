import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { NewsFeedComponent } from './components/news-feed.component';
import { MaterialModule } from '../material.module';
import { NewsFeedEffects } from './effects/news-feed.effects';
import { StoreModule } from '@ngrx/store';
import { newsReducer } from './news-feed.reducer';
import { newsKey } from './selectors/news-feed.selectors';

@NgModule({
  declarations: [NewsFeedComponent],
  exports: [NewsFeedComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(newsKey, newsReducer),
    EffectsModule.forFeature([NewsFeedEffects]),
    MaterialModule,
  ],
})
export class NewsFeedModule {}
