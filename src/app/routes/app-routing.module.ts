import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {MovieDetailsComponent} from '../components/movie-details/movie-details.component';

const routes: Routes = [
  {path: '' , redirectTo: 'movies', pathMatch: 'full' },
  {path: 'movies' , component: HomeComponent },
  {path: 'movies/:movieUrl' , component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
