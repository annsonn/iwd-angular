import { TestBed } from '@angular/core/testing';
import { NewsFeedService } from './news-feed.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('NewsFeedService', () => {
  let fixture: NewsFeedService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewsFeedService],
    });
    fixture = TestBed.inject(NewsFeedService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    const service: NewsFeedService = TestBed.inject(NewsFeedService);
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
