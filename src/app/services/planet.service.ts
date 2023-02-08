import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Planet} from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { }

  getPlanet(planetUrl: string): Observable<Planet> {
    return this.http.get<Planet>(planetUrl);
  }
}
