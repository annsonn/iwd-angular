import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { SetLanguage } from './app.actions';
import { AppState } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly translate: TranslateService,
    private readonly store: Store<AppState>
  ) {
    this.translate.setDefaultLang('en');
  }
  ngOnInit(): void {
    this.store.dispatch(SetLanguage({ lang: this.translate.getBrowserLang() }));
  }

  setLanguage(lang: string): void {
    this.store.dispatch(SetLanguage({ lang }));
    this.translate.use(lang);
  }
}
