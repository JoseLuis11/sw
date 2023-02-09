import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnChanges {

  @Input()
  entity: string;
  lightSaberSrc = `${environment.imagesUrl}/light-saber.png`;
  loadingText = '';

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.entity.currentValue !== changes.entity.previousValue) {
      this.loadingText = `Awesome ${this.entity} loading...`;
    }
  }

}
