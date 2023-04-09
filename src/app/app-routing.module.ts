import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NewMovieComponent } from './components/new-movie/new-movie.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new-movie', component: NewMovieComponent},
  {path: 'details', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
