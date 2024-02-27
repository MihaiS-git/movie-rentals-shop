import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { MoviesService } from './movies.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MoviesResolverService {

  constructor(private dataStorageService: DataStorageService, private movieService: MoviesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const moviesRetrieved = this.movieService.getMovies();
    if (moviesRetrieved.length === 0) {
      return this.dataStorageService.fetchMovies();
    } else {
      return moviesRetrieved;
    }
   }
}
