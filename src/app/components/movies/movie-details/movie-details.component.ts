import { Component, Input } from '@angular/core';
import { Movie } from '../../../common/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  @Input() movie: Movie;
  @Input() index: number;

}
