import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsPageComponent } from './news-page.component';

@Component({ selector: 'app-news-feed', template: '' })
class NewsFeedComponentStub {}

describe('NewsPageComponent', () => {
  let component: NewsPageComponent;
  let fixture: ComponentFixture<NewsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsPageComponent, NewsFeedComponentStub],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
