import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesRepositoryService } from '../movies/services/movies-repository.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: object = null;
  error: string = null;

  constructor(
    private moviesRepositoryService: MoviesRepositoryService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;
    this.getMovie(+id);
  }

  getMovie(id: number) {
    this.moviesRepositoryService.getMovieById(id)
    .subscribe(
      data => this.movie = data,
      err => this.error = err
    );
  }
}
