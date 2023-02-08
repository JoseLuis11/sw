import {MovieDTO} from '../models/dtos/movie-dto';
import {Movie} from '../models/movie';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieParser {
  parse(movies: MovieDTO[]) {
    return movies.reduce(this.transformMovies, []);
  }

  private transformMovies = (movies: Movie[], movieDTO: MovieDTO) => {
    movies.push(this.parseMovie(movieDTO));
    return movies;
  }

  parseMovie(movieDTO: MovieDTO): Movie {
    return {
      name: movieDTO.title,
      releaseDate: new Date(movieDTO.release_date),
      episodeNumber: movieDTO.episode_id,
      director: movieDTO.director,
      producer: movieDTO.producer,
      openingCrawl: movieDTO.opening_crawl,
      characters: movieDTO.characters,
      url: movieDTO.url
    };
  }
}
