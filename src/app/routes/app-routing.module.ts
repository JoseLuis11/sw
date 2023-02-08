import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {MovieDetailsComponent} from '../components/movie-details/movie-details.component';
import {CharacterDetailsComponent} from '../components/character-details/character-details.component';
import {NotFoundComponent} from '../components/not-found/not-found.component';

const routes: Routes = [
  {path: '' , redirectTo: 'movies', pathMatch: 'full' },
  {path: '404' , component: NotFoundComponent },
  {path: 'movies' , component: HomeComponent },
  {path: 'movies/:id' , component: MovieDetailsComponent},
  {path: 'characters/:id', component: CharacterDetailsComponent},
  {path: '**' , redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
