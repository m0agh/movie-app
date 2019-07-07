import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MoviesComponent } from './movies.component';
import { MoviesRepositoryService } from './services/movies-repository.service';
import { SharedModule } from '../shared/shared.module';
import { EnumToArrayPipe } from './pipes/enumToArray.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'movies', component: MoviesComponent }
    ]),
    FormsModule
   ],
  declarations: [
    MoviesComponent,
    EnumToArrayPipe,
    FilterPipe
  ],
  exports: [ ],
  providers: [
    HttpClientModule,
    MoviesRepositoryService
  ]
})
export class MoviesModule { }
