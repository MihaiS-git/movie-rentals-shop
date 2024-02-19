import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../common/movie';
import { MovieGenre } from '../../../common/movie-genre';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movies = this.moviesService.getAllMovies();
    console.log(this.movies);

  }
}
