import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsFeedService {
  private API_PATH = 'https://us-central1-iwd-sandbox.cloudfunctions.net';

  constructor(private http: HttpClient) {}

  fetchNews() {
    return this.http.get(`${this.API_PATH}/news`);
  }
}
