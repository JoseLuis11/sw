import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Entity} from '../utils/entity';
import {CharacterDTO} from '../models/dtos/character-dto';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacter(characterUrl: string): Observable<CharacterDTO> {
    return this.http.get<CharacterDTO>(characterUrl);
  }

  getCharactersPromises(charactersUrls: string[]) {
    return charactersUrls.map(characterUrl => this.getCharacter(characterUrl).toPromise());
  }

  getCharacterId(characterUrl) {
    return Entity.getEntityId(characterUrl);
  }
}
