import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../movie.service';
import {Movie} from '../../models/movie';
import {ActivatedRoute} from '@angular/router';
import {MovieParser} from '../../parsers/movie-parser';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  imagesUrl = environment.imagesUrl;

  constructor(private movieService: MovieService, private movieParser: MovieParser, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const movieUrl = params.get('movieUrl');
      this.movieService.getMovie(movieUrl).subscribe(response => {
        this.movie = this.movieParser.parseMovie(response);
      });
    });
  }
}
