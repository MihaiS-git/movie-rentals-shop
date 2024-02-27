import { Component } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-movies',
  templateUrl: './admin-movies.component.html',
  styleUrl: './admin-movies.component.css'
})
export class AdminMoviesComponent {

  constructor(private movieService: MoviesService, private router: Router, private route: ActivatedRoute) { }


  onAddNewMovie() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
