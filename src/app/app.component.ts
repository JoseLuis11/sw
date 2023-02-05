import { Component } from '@angular/core';
import {MovieService} from './movie.service';
import {Movie} from './models/movie';
import {MovieParser} from './parsers/movie-parser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-template';
  movies: Movie[];

  constructor(private movieService: MovieService) {
    this.movieService.getMovies().subscribe((response) => {
      this.movies = MovieParser.parse(response.results);

      this.movies.forEach(movie => {
        console.log(movie);
      });
    });
  }
}
