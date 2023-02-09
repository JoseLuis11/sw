import { Injectable } from '@angular/core';
import {Loading} from './models/loading';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject: Subject<Loading> = new Subject<Loading>();

  constructor() {}

  changeLoading(loading: Loading): void {
    this.setLoading(loading);
  }

  getLoadingSubject(): Subject<Loading> {
    return this.loadingSubject;
  }

  setLoading(loading: Loading): void {
    this.loadingSubject.next(loading);
  }
}
