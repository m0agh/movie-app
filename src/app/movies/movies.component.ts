import { Component, OnInit } from '@angular/core';

import { Movie } from './models/movie.model';
import { MoviesRepositoryService } from './services/movies-repository.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = null;
  visibleMovies: Movie[] = null;

  constructor(private moviesRepositoryService: MoviesRepositoryService) { }

  ngOnInit() {
    this.moviesRepositoryService.getMovies()
    .subscribe(movies => console.log(movies));

    this.moviesRepositoryService.getMovieById(1)
    .subscribe(movie => console.log(movie));
  }

}
