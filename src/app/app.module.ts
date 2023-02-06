import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MovieService} from './movie.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BreadCrumbsComponent } from './components/bread-crumbs/bread-crumbs.component';
import { HomeComponent } from './components/home/home.component';
import {AppRoutingModule} from './routes/app-routing.module';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadCrumbsComponent,
    HomeComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
