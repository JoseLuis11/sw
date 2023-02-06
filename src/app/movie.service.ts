import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  MOVIES_URL = `${environment.apiUrl}/films`;

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get<any>(this.MOVIES_URL);
  }

  getMovie(movieUrl): Observable<any> {
    return this.http.get<any>(movieUrl);
  }
}
