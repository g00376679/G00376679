
import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../services/movie.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-top-rated-movie',
  templateUrl: './top-rated-movie.page.html',
  styleUrls: ['./top-rated-movie.page.scss'],
})
export class TopRatedMoviePage implements OnInit {

  popular_movies = [];
  image_base = 'https://image.tmdb.org/t/p/w300';
  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit() {
    //get top rated movie
    this.movieService.getTopRatedMovieLists().subscribe((movies: []) => {
      this.popular_movies = movies['results'];
    })
  }

  // open detail page
  openMovie(movie) {
    let navigationExtras: NavigationExtras = {
      state: {
        movie: movie
      }
    };
    this.router.navigate(['/movie-details'], navigationExtras)
  }

  
}


