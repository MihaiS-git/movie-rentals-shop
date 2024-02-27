import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoviesService } from './movies.service';
import { map, tap } from 'rxjs';
import { Movie } from '../common/movie';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private movieService: MoviesService) { }

  storeMovies() {
    const retrievedMovies = this.movieService.getMovies();
    this.http.put('https://movie-rentals-565f5-default-rtdb.europe-west1.firebasedatabase.app/movies.json?auth=', retrievedMovies)
      .subscribe(
        response => {
          console.log(response);
        }
      );
  }

  fetchMovies() {
    return this.http.get<Movie[]>('https://movie-rentals-565f5-default-rtdb.europe-west1.firebasedatabase.app/movies.json')
      .pipe(
        map(movies => {
          return movies.map(movie => {
            return { ...movie };
          })
        }),
        tap(movies => {
          this.movieService.setMovies(movies);
        })
    );
  }

}
