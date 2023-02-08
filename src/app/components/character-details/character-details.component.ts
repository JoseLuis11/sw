import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {ActivatedRoute} from '@angular/router';
import {CharacterService} from '../../services/character.service';
import {BreadcrumbsService} from '../../services/breadcrumbs.service';
import {Character} from '../../models/character';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character: Character;
  constructor(private characterService: CharacterService, private route: ActivatedRoute, private breadCrumbsService: BreadcrumbsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const characterUrl = `${environment.apiUrl}/people/${params.get('id')}`;
      this.getCharacter(characterUrl);
    });
  }

  getCharacter(characterUrl) {
    this.characterService.getCharacter(characterUrl).subscribe(response => {
      this.character = response;
      this.addBreadCrumb();
    });
  }

  addBreadCrumb() {
    this.breadCrumbsService.addBreadCrumb({
      label: this.character.name,
      link: `/characters/${this.characterService.getCharacterId(this.character.url)}`
    });
  }

}
