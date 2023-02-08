import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Movie} from '../models/movie';
import {Entity} from '../utils/entity';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  MOVIES_URL = `${environment.apiUrl}/films`;
  IMAGES_URL = `${environment.imagesUrl}/episode_`;

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get<any>(this.MOVIES_URL);
  }

  getMovie(movieUrl): Observable<any> {
    return this.http.get<any>(movieUrl);
  }

  getMovieId(movieUrl: string) {
    return Entity.getEntityId(movieUrl);
  }

  getMovieImageSrc(movie: Movie): string {
    return movie ? this.IMAGES_URL + movie.episodeNumber + '.jpg' : '';
  }
}
