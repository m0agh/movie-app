import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';

export const appRoutes: Routes = [
  { path: '', component: MoviesComponent, },
  { path: 'movies', loadChildren: './movies/movies.module#MoviesModule'}
];
