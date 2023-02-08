import { Injectable } from '@angular/core';
import {BreadCrumb} from '../models/bread-crumb';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  private breadCrumbs: BreadCrumb[] = [];
  private breadCrumbsChange: Subject<BreadCrumb[]> = new Subject<BreadCrumb[]>();

  constructor() {
    this.breadCrumbsChange.subscribe((breadCrumbs => {
      this.breadCrumbs = breadCrumbs;
    }));
  }

  setBreadCrumbs(breadCrumbs: BreadCrumb[]): void {
    this.breadCrumbsChange.next(breadCrumbs);
  }

  addBreadCrumb(breadCrumb: BreadCrumb): void {
    this.breadCrumbs.push(breadCrumb);
    this.setBreadCrumbs(this.breadCrumbs);
  }

  getBreadCrumbs(): BreadCrumb[] {
    return this.breadCrumbs;
  }

  removeOtherLevels(currentLevel: number): void {
    if (currentLevel === this.breadCrumbs.length) {
      return;
    }
    while (this.breadCrumbs.length > currentLevel) {
      this.breadCrumbs.pop();
    }
    this.setBreadCrumbs(this.breadCrumbs);
  }
}
