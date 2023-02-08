import { Component, OnInit } from '@angular/core';
import {BreadCrumb} from '../../models/bread-crumb';
import {BreadcrumbsService} from '../../services/breadcrumbs.service';

@Component({
  selector: 'bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss']
})
export class BreadCrumbsComponent implements OnInit {

  constructor(private breadCrumbsService: BreadcrumbsService) { }

  breadCrumbs: BreadCrumb[] = [];

  ngOnInit() {
    this.breadCrumbs = this.breadCrumbsService.getBreadCrumbs();
    const initBreadCrumb: BreadCrumb = {
      label: 'Home',
      link: '/movies'
    };

    this.breadCrumbs.push(initBreadCrumb);
    this.breadCrumbsService.setBreadCrumbs(this.breadCrumbs);
  }
}
