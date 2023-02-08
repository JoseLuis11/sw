import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Character} from '../models/character';
import {Observable} from 'rxjs';
import {Entity} from '../utils/entity';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacter(characterUrl: string): Observable<Character> {
    return this.http.get<Character>(characterUrl);
  }

  getCharactersPromises(charactersUrls: string[]) {
    return charactersUrls.map(characterUrl => this.getCharacter(characterUrl).toPromise());
  }

  getCharacterId(characterUrl) {
    return Entity.getEntityId(characterUrl);
  }
}
