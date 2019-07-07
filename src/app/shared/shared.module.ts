import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryMoviesDataService } from '../movies/services/in-memory-movies-data.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryMoviesDataService)
  ],
  declarations: [ ],
  exports: [
    CommonModule,
  ],
  providers: [ ]
})
export class SharedModule { }
