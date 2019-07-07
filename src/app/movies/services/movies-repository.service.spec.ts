import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MoviesRepositoryService } from './movies-repository.service';
import { movieOne, movieTwo } from '../pipes/SampleDataForTest';

describe('Movie Service', () => {
  let httpTestingController: HttpTestingController;
  let service: MoviesRepositoryService;

  const moviesArr = [
    movieOne,
    movieTwo
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        MoviesRepositoryService
      ]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(MoviesRepositoryService);
  });

  describe('getMovies', () => {
    it('should call get method to retrieve all movies with the correct URL', () => {
      service.getMovies().subscribe(movies => {
        expect(movies[1].name).toEqual('gridiron gang');
      });
      const req = httpTestingController.expectOne('api/movies');
      req.flush(moviesArr);
      httpTestingController.verify();
    });
  });

  describe('getMovie', () => {
    it('should call get method to retrieve the movie with the correct URL', () => {
      service.getMovieById(1).subscribe((data) => {
        expect(data.name).toEqual(moviesArr[0].name);
      });

      const req = httpTestingController.expectOne('api/movies/1');
      req.flush(moviesArr[0]);
      httpTestingController.verify();
    });
  });
});
