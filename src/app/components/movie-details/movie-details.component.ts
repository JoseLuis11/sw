import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Movie} from '../../models/movie';
import {ActivatedRoute} from '@angular/router';
import {MovieParser} from '../../parsers/movie-parser';
import {environment} from '../../../environments/environment';
import {BreadcrumbsService} from '../../services/breadcrumbs.service';
import {CharacterService} from '../../services/character.service';
import {Character} from '../../models/character';
import {Sort} from '../../utils/sort';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  characters: Character[] = [];

  constructor(
    private movieService: MovieService,
    private movieParser: MovieParser,
    private route: ActivatedRoute,
    private breadCrumbsService: BreadcrumbsService,
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const movieUrl = `${environment.apiUrl}/films/${params.get('id')}`;
      this.getMovie(movieUrl);
    });
  }

  getMovie(movieUrl) {
    this.movieService.getMovie(movieUrl).subscribe(response => {
      this.movie = this.movieParser.parseMovie(response);
      this.addBreadCrumb();
      this.getCharacters();
      this.breadCrumbsService.removeOtherLevels(2);
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

  getCharacterId(character: Character) {
    return this.characterService.getCharacterId(character.url);
  }

  getCharacters() {
    const promises = this.characterService.getCharactersPromises(this.movie.characters);
    Promise.all<Character>(promises).then((characters: Character[]) => {
      this.characters = characters.sort((a, b) => Sort.sortStringsDesc(a.name, b.name));
    });
  }
}
