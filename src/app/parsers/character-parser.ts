import {Injectable} from '@angular/core';
import {CharacterDTO} from '../models/dtos/character-dto';
import {Character} from '../models/character';
import {String} from '../utils/string';

@Injectable({
  providedIn: 'root'
})
export class CharacterParser {
  parse(characterDTO: CharacterDTO): Character {
    return {
      name: characterDTO.name,
      birth: characterDTO.birth_year,
      gender: String.titleCase(characterDTO.gender),
      hairColor: String.titleCase(characterDTO.hair_color),
      eyeColor: String.titleCase(characterDTO.eye_color),
      homeWorld: characterDTO.homeworld,
      relatedFilms: characterDTO.films,
      url: characterDTO.url
    };
  }
}
