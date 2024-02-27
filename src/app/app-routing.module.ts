import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminMoviesComponent } from './components/admin/admin-movies/admin-movies.component';
import { AdminCustomersComponent } from './components/admin/admin-customers/admin-customers.component';
import { AdminRentalsComponent } from './components/admin/admin-rentals/admin-rentals.component';
import { MovieEditComponent } from './components/admin/admin-movies/movie-edit/movie-edit.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { MoviesResolverService } from './services/movies-resolver.service';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent},
  { path: 'movies/:id', component: MovieDetailsComponent},
  {
    path: 'admin', component: AdminComponent,
    children: [
      {
        path: 'movies', component: AdminMoviesComponent,
        children: [
          { path: 'new', component: MovieEditComponent },
          { path: ':id', component: MovieDetailsComponent, resolve: [MoviesResolverService] },
          { path: ':id/edit', component: MovieEditComponent, resolve: [MoviesResolverService]}
        ]
      },
      { path: 'customers', component: AdminCustomersComponent },
      { path: 'rentals', component: AdminRentalsComponent },
    ]
  },
  {
    path: 'signin', component: SigninComponent, children: [
      {path: 'auth', component: AuthComponent, canActivate: [AuthGuard]}
    ]
  },
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
