import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FetchNews } from '../actions/news.actions';
import { MaterialModule } from '../material.module';
import { isFetchingNewsItems, selectNewsItems } from '../selectors/news.selectors';

import { NewsPageComponent } from './news-page.component';

describe('NewsPageComponent', () => {
  let component: NewsPageComponent;
  let fixture: ComponentFixture<NewsPageComponent>;
  const initialState = {news: {}};
  let mockStore: MockStore;
  let mockNewItemsSelector;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ NewsPageComponent ],
      providers: [ provideMockStore({initialState}),],
    })
    .compileComponents();
    fixture = TestBed.createComponent(NewsPageComponent);
    mockStore = TestBed.inject(MockStore);    
    fixture.detectChanges();
  });

  it('should create', () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should dispatch fetch news on init', () => {
    mockStore.scannedActions$.subscribe(action => expect(action).toEqual(FetchNews()));
  })

  it('should render news title abd show spinner', () => {
    mockNewItemsSelector = mockStore.overrideSelector(
      isFetchingNewsItems,
      true
    );
    mockStore.refreshState();
    fixture.detectChanges();
    const compiledElement: HTMLElement = fixture.nativeElement;
    expect(compiledElement.querySelector('h1').textContent).toContain("NEWS AND UPDATES");
    expect(compiledElement.querySelector('mat-spinner')).toBeTruthy();
  })

  it('should render empty list', () => {
    mockNewItemsSelector = mockStore.overrideSelector(
      selectNewsItems,
      [{text: 'Intelliware Sponsors', url: 'https://intelliware.com'}]
    );
    mockNewItemsSelector = mockStore.overrideSelector(
      isFetchingNewsItems,
      false
    );
    mockStore.refreshState();
    fixture.detectChanges();
    const compiledElement: HTMLElement = fixture.nativeElement;
    expect(compiledElement.querySelectorAll('.news-item').length).toBe(1);
  })
 
});
