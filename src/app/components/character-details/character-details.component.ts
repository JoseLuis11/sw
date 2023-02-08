import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {ActivatedRoute} from '@angular/router';
import {CharacterService} from '../../services/character.service';
import {BreadcrumbsService} from '../../services/breadcrumbs.service';
import {Character} from '../../models/character';
import {MovieService} from '../../services/movie.service';
import {MovieParser} from '../../parsers/movie-parser';
import {Movie} from '../../models/movie';
import {CharacterParser} from '../../parsers/character-parser';
import {PlanetService} from '../../services/planet.service';
import {Planet} from '../../models/planet';
import {Sort} from '../../utils/sort';
import {StringUtils} from '../../utils/stringUtils';
import {MovieDTO} from '../../models/dtos/movie-dto';
import {TooltipPosition} from '../../enums/tooltip-position.enum';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character: Character;
  homeWorld: Planet;
  relatedFilms: string;
  TooltipPosition = TooltipPosition;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private breadCrumbsService: BreadcrumbsService,
    private movieService: MovieService,
    private movieParser: MovieParser,
    private characterParser: CharacterParser,
    private planetService: PlanetService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const characterUrl = `${environment.apiUrl}/people/${params.get('id')}`;
      this.getCharacter(characterUrl);
    });
  }

  getCharacter(characterUrl) {
    this.characterService.getCharacter(characterUrl).subscribe(response => {
      this.character = this.characterParser.parse(response);
      this.getPlanet(response.homeworld);
      this.getRelatedFilms();
      this.route.queryParams.subscribe(params => {
          this.manageBreadCrumbs(params);
      });
    });
  }

  getPlanet(planetUrl) {
    this.planetService.getPlanet(planetUrl).subscribe((planet: Planet) => {
      this.homeWorld = planet;
    });
  }

  manageBreadCrumbs(params) {
    if (!params.movie) {
      this.addBreadCrumb();
      return;
    } else if (params.movie && this.breadCrumbsService.getBreadCrumbs().length === 2) {
      this.addBreadCrumbWithMovie(params.movie);
      return;
    }
    this.getMovie(params.movie);
  }

  getMovie(movieId) {
    const movieUrl = `${environment.apiUrl}/films/${movieId}`;
    this.movieService.getMovie(movieUrl).subscribe(response => {
      const movie = this.movieParser.parseMovie(response);
      this.addMovieBreadCrumb(movie);
      this.addBreadCrumbWithMovie(movieId);
    });
  }

  addBreadCrumb() {
    this.breadCrumbsService.addBreadCrumb({
      label: this.character.name,
      link: `/characters/${this.characterService.getCharacterId(this.character.url)}`
    });
  }

  addBreadCrumbWithMovie(movieId) {
    this.breadCrumbsService.addBreadCrumb({
      label: this.character.name,
      link: `/characters/${this.characterService.getCharacterId(this.character.url)}`,
      queryParams: {movie: movieId}
    });
  }

  addMovieBreadCrumb(movie: Movie) {
    this.breadCrumbsService.addBreadCrumb({
      label: movie.name,
      link: `/movies/${this.movieService.getMovieId(movie.url)}`
    });
  }

  getRelatedFilms() {
    const promises = this.movieService.getMoviesPromises(this.character.relatedFilms);
    Promise.all<MovieDTO>(promises).then((movies: MovieDTO[]) => {
      const relatedFilms = movies.map(movie => movie.title).sort((a, b) => Sort.sortStringsDesc(a, b));
      this.relatedFilms = StringUtils.getStringWithComas(relatedFilms);
    });
  }

}
