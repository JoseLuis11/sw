import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Loading} from './models/loading';
import {LoadingService} from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'angular-template';
  loading: Loading = {isLoading: false};

  constructor(private router: Router, private loadingService: LoadingService, private cdr: ChangeDetectorRef) {
  }

  isNotFoundPage(): boolean {
    return this.router.url === '/404';
  }

  ngOnInit(): void {

  }

  ngAfterViewChecked() {
    this.loadingService.getLoadingSubject().subscribe(loading => {
      this.loading = loading;
    });
    this.cdr.detectChanges();
  }
}
