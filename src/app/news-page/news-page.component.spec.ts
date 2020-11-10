import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from '../material.module';

import { NewsPageComponent } from './news-page.component';

describe('NewsPageComponent', () => {
  let component: NewsPageComponent;
  let fixture: ComponentFixture<NewsPageComponent>;
  const initialState = { news: {} };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ NewsPageComponent ],
      providers: [
        provideMockStore({ initialState }),
        // other providers
      ],
    })
    .compileComponents();
    fixture = TestBed.createComponent(NewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render news title', () => {
    const compiledElement: HTMLElement = fixture.nativeElement;
    expect(compiledElement.querySelector('h1').textContent).toContain("NEWS AND UPDATES");
  })
 
});
