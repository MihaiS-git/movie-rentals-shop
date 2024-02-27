import { Injectable } from '@angular/core';
import { Movie } from '../common/movie';
import { MovieGenre } from '../common/movie-genre';
import { MovieAgeRestrictions } from '../common/movie-age-restrictions';
import { Actor } from '../common/actor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  addMovie(movie: any) {
    throw new Error('Method not implemented.');
  }

  private movies: Movie[] = [
    new Movie(1, 'Movie1', 1999, MovieGenre.ACTION, MovieAgeRestrictions.R, 4.55, './../../../../assets/images/movies/104866607.png', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere dolore cum eligendi sed cumque rerum repudiandae vero? Incidunt beatae perspiciatis rem molestias doloremque excepturi laudantium, iusto sed a mollitia.', [new Actor(1, 'John', 'Doe', '01-01-1975')], 5, ['good!!!', 'super!']),
    new Movie(2, 'Movie2', 2018, MovieGenre.COMEDY, MovieAgeRestrictions.NC17, 5.55, './../../../../assets/images/movies/104866607.png', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere dolore cum eligendi sed cumque rerum repudiandae vero? Incidunt beatae perspiciatis rem molestias doloremque excepturi laudantium, iusto sed a mollitia.', [new Actor(2, 'Janne', 'Doe', '01-01-1978')], 4.5, ['perfect!', 'wonderful!', 'great movie!']),
    new Movie(3, 'Movie3', 2019, MovieGenre.COMEDY, MovieAgeRestrictions.NC17, 5.55, './../../../../assets/images/movies/104866607.png', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere dolore cum eligendi sed cumque rerum repudiandae vero? Incidunt beatae perspiciatis rem molestias doloremque excepturi laudantium, iusto sed a mollitia.', [new Actor(3, 'Anne', 'Doe', '01-01-1978')], 4.5, ['perfect!', 'wonderful!', 'great movie!']),
    new Movie(4, 'Movie4', 2020, MovieGenre.COMEDY, MovieAgeRestrictions.NC17, 5.55, './../../../../assets/images/movies/104866607.png', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere dolore cum eligendi sed cumque rerum repudiandae vero? Incidunt beatae perspiciatis rem molestias doloremque excepturi laudantium, iusto sed a mollitia.', [new Actor(4, 'Danne', 'Doe', '01-01-1978')], 4.5, ['perfect!', 'wonderful!', 'great movie!']),
    new Movie(5, 'Movie5', 2012, MovieGenre.COMEDY, MovieAgeRestrictions.NC17, 5.55, './../../../../assets/images/movies/104866607.png', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere dolore cum eligendi sed cumque rerum repudiandae vero? Incidunt beatae perspiciatis rem molestias doloremque excepturi laudantium, iusto sed a mollitia.', [new Actor(5, 'Ganne', 'Doe', '01-01-1978')], 4.5, ['perfect!', 'wonderful!', 'great movie!']),
    new Movie(6, 'Movie6', 2022, MovieGenre.COMEDY, MovieAgeRestrictions.NC17, 5.55, './../../../../assets/images/movies/104866607.png', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere dolore cum eligendi sed cumque rerum repudiandae vero? Incidunt beatae perspiciatis rem molestias doloremque excepturi laudantium, iusto sed a mollitia.', [new Actor(6, 'Fanne', 'Doe', '01-01-1978')], 4.5, ['perfect!', 'wonderful!', 'great movie!']),
    new Movie(7, 'Movie7', 2021, MovieGenre.COMEDY, MovieAgeRestrictions.NC17, 5.55, './../../../../assets/images/movies/104866607.png', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere dolore cum eligendi sed cumque rerum repudiandae vero? Incidunt beatae perspiciatis rem molestias doloremque excepturi laudantium, iusto sed a mollitia.', [new Actor(7, 'Hanne', 'Doe', '01-01-1978')], 4.5, ['perfect!', 'wonderful!', 'great movie!']),
    new Movie(8, 'Movie8', 2023, MovieGenre.COMEDY, MovieAgeRestrictions.NC17, 5.55, './../../../../assets/images/movies/104866607.png', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere dolore cum eligendi sed cumque rerum repudiandae vero? Incidunt beatae perspiciatis rem molestias doloremque excepturi laudantium, iusto sed a mollitia.', [new Actor(8, 'Lanne', 'Doe', '01-01-1978')], 4.5, ['perfect!', 'wonderful!', 'great movie!'])
  ];
  moviesChanged = new Subject<Movie[]>();

  constructor() { }

  public getAllMovies() {
    return this.movies;
  }

  public addNewMovie(movie: Movie) {
    this.movies.push(movie);
    this.moviesChanged.next(this.movies.slice());
  }

  setMovies(moviesList: Movie[]) {
    this.movies = moviesList;
    this.moviesChanged.next(this.movies.slice());
  }

  getMovies() {
    return this.movies.slice();
  }







}
