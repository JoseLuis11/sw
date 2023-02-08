import {Injectable} from '@angular/core';
import {CharacterDTO} from '../models/dtos/character-dto';
import {Character} from '../models/character';
import {StringUtils} from '../utils/stringUtils';

@Injectable({
  providedIn: 'root'
})
export class CharacterParser {
  parse(characterDTO: CharacterDTO): Character {
    return {
      name: characterDTO.name,
      birth: characterDTO.birth_year,
      gender: StringUtils.titleCase(characterDTO.gender),
      hairColor: StringUtils.titleCase(characterDTO.hair_color),
      eyeColor: StringUtils.titleCase(characterDTO.eye_color),
      homeWorld: characterDTO.homeworld,
      relatedFilms: characterDTO.films,
      url: characterDTO.url
    };
  }
}
