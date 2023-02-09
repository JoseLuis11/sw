import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MovieService} from './services/movie.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BreadCrumbsComponent } from './components/bread-crumbs/bread-crumbs.component';
import { HomeComponent } from './components/home/home.component';
import {AppRoutingModule} from './routes/app-routing.module';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import {BreadcrumbsService} from './services/breadcrumbs.service';
import {CharacterService} from './services/character.service';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {DirectivesModule} from './directives/directives.module';
import {LoadingService} from './loading.service';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadCrumbsComponent,
    HomeComponent,
    MovieDetailsComponent,
    CharacterDetailsComponent,
    NotFoundComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DirectivesModule
  ],
  providers: [MovieService, BreadcrumbsService, CharacterService, LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
