import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from '../../material.module';
import { FetchNews } from '../actions/news-feed.actions';
import {
  isFetchingNewsItems,
  selectNewsItems,
} from '../selectors/news-feed.selectors';
import { NewsFeedComponent } from './news-feed.component';

describe('NewsFeedComponent', () => {
  let component: NewsFeedComponent;
  let fixture: ComponentFixture<NewsFeedComponent>;
  const initialState = { news: [], isLoading: false };
  let mockStore: MockStore;
  let mockNewItemsSelector;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [NewsFeedComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
    fixture = TestBed.createComponent(NewsFeedComponent);
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should dispatch fetch news on init', () => {
    mockStore.scannedActions$.subscribe((action) =>
      expect(action).toEqual(FetchNews())
    );
  });

  it('should render show spinner', () => {
    mockNewItemsSelector = mockStore.overrideSelector(
      isFetchingNewsItems,
      true
    );
    mockStore.refreshState();
    fixture.detectChanges();
    const compiledElement: HTMLElement = fixture.nativeElement;
    expect(compiledElement.querySelector('mat-spinner')).toBeTruthy();
  });

  it('should render empty list', () => {
    mockNewItemsSelector = mockStore.overrideSelector(selectNewsItems, [
      { text: 'Intelliware Sponsors', url: 'https://intelliware.com' },
    ]);
    mockNewItemsSelector = mockStore.overrideSelector(
      isFetchingNewsItems,
      false
    );
    mockStore.refreshState();
    fixture.detectChanges();
    const compiledElement: HTMLElement = fixture.nativeElement;
    expect(compiledElement.querySelectorAll('.news-item').length).toBe(1);
  });
});
