import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MoviesComponent } from './movies.component';
import { MoviesRepositoryService } from './services/movies-repository.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'movies', component: MoviesComponent }
    ]),
   ],
  declarations: [ MoviesComponent ],
  exports: [ ],
  providers: [
    HttpClientModule,
    MoviesRepositoryService
  ]
})
export class MoviesModule { }
