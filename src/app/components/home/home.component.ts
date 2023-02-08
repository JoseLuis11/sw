import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/movie';
import {environment} from '../../../environments/environment';
import {MovieService} from '../../services/movie.service';
import {MovieParser} from '../../parsers/movie-parser';
import {fadeTriggerAnimation} from '../../animations/movies-animations';
import {BreadcrumbsService} from '../../services/breadcrumbs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeTriggerAnimation
  ]
})
export class HomeComponent implements OnInit {
  movies: Movie[];
  imagesUrl = environment.imagesUrl;

  constructor(private movieService: MovieService, private movieParser: MovieParser, private breadCrumbsService: BreadcrumbsService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((response) => {
      this.movies = this.movieParser.parse(response.results);
    });
    this.breadCrumbsService.removeOtherLevels(1);
  }

  getMovieId(movie: Movie) {
    return this.movieService.getMovieId(movie.url);
  }

}
