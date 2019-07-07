import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MoviesModule } from './movies/movies.module';
import { appRoutes } from './routes';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesDetailModule } from './movie-detail/movie-detail.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CoreModule,
    SharedModule,
    MoviesModule,
    MoviesDetailModule
  ],
  declarations: [
    AppComponent,
    MovieDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
