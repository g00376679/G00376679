import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../services/movie.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.page.html',
  styleUrls: ['./popular-movies.page.scss'],
})
export class PopularMoviesPage implements OnInit {

  popular_movies = [];
  image_base = 'https://image.tmdb.org/t/p/w300';
  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit() {
    //get popular movies
    this.movieService.getPolularMovieLists().subscribe((movies: []) => {
      this.popular_movies = movies['results'];
    })
  }

  //open detail page
  openMovie(movie) {
    let navigationExtras: NavigationExtras = {
      state: {
        movie: movie
      }
    };
    this.router.navigate(['/movie-details'], navigationExtras)
  }

}

