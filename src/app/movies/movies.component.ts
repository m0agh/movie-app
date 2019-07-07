import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';

import { Movie } from './models/movie.model';
import { Genre } from './models/genre.model';
import { MoviesRepositoryService } from './services/movies-repository.service';
import { FilterMoviesService } from './services/filter-movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = null;
  visibleMovies: Movie[] = null;

  searchText: any = '';
  sortBy: any = 'id';

  public genres = Genre;
  selectedGenre = 'all';

  constructor(
    private moviesRepositoryService: MoviesRepositoryService,
    private filterMoviesService: FilterMoviesService,
    private router: Router,
    private location: Location) {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        this.selectedGenre = this.getParameterByName('filter', event.url) || 'all';
      });
    }

  ngOnInit() {
    this.moviesRepositoryService.getMovies()
    .subscribe(movies => {
      this.movies = movies;
      this.applyFilter(this.selectedGenre);
    });
  }

  changeFilter(event: any) {
    event.preventDefault();
    const targetGenre = event.target.innerText.toLowerCase();
    this.location.go(`?filter=${targetGenre}`);
    this.applyFilter(targetGenre);
  }

  private applyFilter(filterBy: string) {
    this.selectedGenre = filterBy;
    this.visibleMovies = this.filterMoviesService.filterMovies(filterBy.toLowerCase(), this.movies);
  }

  private getParameterByName(name: string, url: string) {
    if (!url) { url = window.location.href; }
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) { return null; }
    if (!results[2]) { return ''; }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
}
