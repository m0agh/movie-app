import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MoviesModule } from './movies/movies.module';
import { appRoutes } from './routes';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CoreModule,
    MoviesModule
  ],
  declarations: [
    AppComponent,
    MovieDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
