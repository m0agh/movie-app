import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MoviesComponent } from './movies.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'movies', component: MoviesComponent }
    ]),
   ],
  declarations: [ MoviesComponent ],
  exports: [ ],
  providers: [ ]
})
export class MoviesModule { }
