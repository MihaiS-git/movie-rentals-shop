import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminMoviesComponent } from './components/admin/admin-movies/admin-movies.component';
import { AdminCustomersComponent } from './components/admin/admin-customers/admin-customers.component';
import { AdminRentalsComponent } from './components/admin/admin-rentals/admin-rentals.component';
import { MovieEditComponent } from './components/admin/admin-movies/movie-edit/movie-edit.component';
import { AuthComponent } from './components/auth/auth.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './components/auth/auth-interceptor.service';
import { MoviesResolverService } from './services/movies-resolver.service';
import { DataStorageService } from './services/data-storage.service';
import { MoviesService } from './services/movies.service';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    MovieDetailsComponent,
    MoviesListComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    MovieDetailsComponent,
    FooterComponent,
    AdminComponent,
    AdminMoviesComponent,
    AdminCustomersComponent,
    AdminRentalsComponent,
    MovieEditComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MoviesService,
    DataStorageService,
    MoviesResolverService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
