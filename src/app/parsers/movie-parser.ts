import {MovieDTO} from '../models/dtos/movie-dto';
import {Movie} from '../models/movie';


export class MovieParser {
  static parse(movies: MovieDTO[]) {
    return movies.reduce(this.transformMovie, []);
  }

  static transformMovie(movies: Movie[], movieDTO: MovieDTO) {
    const parsedMovie: Movie = {
      name: movieDTO.title,
      releaseDate: new Date(movieDTO.release_date),
      episodeNumber: movieDTO.episode_id,
      director: movieDTO.director,
      producer: movieDTO.producer,
      openingCrawl: movieDTO.opening_crawl,
      characters: movieDTO.characters
    };

    movies.push(parsedMovie);
    return movies;
  }
}
