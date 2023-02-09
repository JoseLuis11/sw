import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/movie';
import {MovieService} from '../../services/movie.service';
import {MovieParser} from '../../parsers/movie-parser';
import {fadeTriggerAnimation} from '../../animations/animations';
import {BreadcrumbsService} from '../../services/breadcrumbs.service';
import {LoadingService} from '../../loading.service';
import {Entity} from '../../enums/entity.enum';

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

  constructor(private movieService: MovieService,
              private movieParser: MovieParser,
              private breadCrumbsService: BreadcrumbsService,
              private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.changeLoading({isLoading: true, entity: Entity.MOVIES});
    this.movieService.getMovies().subscribe((response) => {
      this.movies = this.movieParser.parse(response.results);
      this.loadingService.changeLoading({isLoading: false});
    });
    this.breadCrumbsService.removeOtherLevels(1);
  }

  getMovieId(movie: Movie) {
    return this.movieService.getMovieId(movie.url);
  }

  getMovieImageSrc(movie: Movie) {
    return this.movieService.getMovieImageSrc(movie);
  }
}
