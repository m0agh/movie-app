import { Injectable } from '@angular/core';

// RxJs
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

// model
import { Movie } from '../models/movie.model';

@Injectable()
export class MoviesRepositoryService {
  private moviesEndpoint = 'api/movies';
  constructor(
    private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesEndpoint)
      .pipe(
        tap(_ => console.log(`fetched movies list`)),
        catchError(this.handleError('getMovies', []))
      );
  }

  getMovieById(id: number): Observable<Movie> {
    const url = `${this.moviesEndpoint}/${id}`;
    return this.http.get<Movie>(url).pipe(
      tap(_ => console.log(`fetched movie with id=${id}`)),
      catchError(this.handleError<Movie>(`getMovie id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
