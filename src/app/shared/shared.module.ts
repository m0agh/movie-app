import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InMemoryMoviesDataService } from '../movies/services/in-memory-movies-data.service';
import { LoadingSpinnerComponent } from './loading-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryMoviesDataService),
    BrowserAnimationsModule
  ],
  declarations: [
    LoadingSpinnerComponent
  ],
  exports: [
    CommonModule,
    LoadingSpinnerComponent,
    BrowserAnimationsModule
  ],
  providers: [ ]
})
export class SharedModule { }
