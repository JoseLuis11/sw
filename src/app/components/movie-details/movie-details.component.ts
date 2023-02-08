import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Movie} from '../../models/movie';
import {ActivatedRoute} from '@angular/router';
import {MovieParser} from '../../parsers/movie-parser';
import {environment} from '../../../environments/environment';
import {BreadcrumbsService} from '../../services/breadcrumbs.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  imagesUrl = environment.imagesUrl;

  constructor(
    private movieService: MovieService,
    private movieParser: MovieParser,
    private route: ActivatedRoute,
    private breadCrumbsService: BreadcrumbsService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const movieUrl = `${environment.apiUrl}/films/${params.get('movieUrl')}`;
      this.getMovie(movieUrl);
    });
  }

  getMovie(movieUrl) {
    this.movieService.getMovie(movieUrl).subscribe(response => {
      this.movie = this.movieParser.parseMovie(response);
      this.addBreadCrumb();
    });
  }

  addBreadCrumb() {
    this.breadCrumbsService.addBreadCrumb({
      label: this.movie.name,
      link: `/movies/${this.movieService.getMovieId(this.movie.url)}`
    });
  }

  getMovieImageSrc(movie: Movie): string {
    return this.movieService.getMovieImageSrc(movie);
  }
}
