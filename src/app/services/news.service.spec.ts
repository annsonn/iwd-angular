import { TestBed } from '@angular/core/testing';
import { NewsService } from './news.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('NewsService', () => {
  let fixture: NewsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewsService],
    });
    fixture = TestBed.inject(NewsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    const service: NewsService = TestBed.inject(NewsService);
    expect(service).toBeTruthy();
  });

  it('should retrieve news items', () => {
    const mockNewsItemResponse = {
      data: [
        { text: 'abc', url: '123' },
        { text: 'abc', url: '123' },
      ],
    };

    fixture.fetchNews().subscribe((newsItems) => {
      expect(newsItems).toEqual(mockNewsItemResponse);
    });

    const httpRequest = httpMock.expectOne(
      'https://us-central1-iwd-sandbox.cloudfunctions.net/news'
    );
    expect(httpRequest.request.method).toBe('GET');
    httpRequest.flush(mockNewsItemResponse);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
