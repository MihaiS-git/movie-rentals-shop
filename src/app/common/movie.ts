import { Actor } from "./actor";
import { MovieAgeRestrictions } from "./movie-age-restrictions";
import { MovieGenre } from "./movie-genre";

export class Movie {

  constructor(
    public id: number,
    public title: string,
    public year: number,
    public genre: MovieGenre,
    public ageRestictions: MovieAgeRestrictions,
    public price: number,
    public imagePath: string,
    public description: string,
    public actors: Actor[],
    public stars: number,
    public reviews: string[]
  ) { }
  }
