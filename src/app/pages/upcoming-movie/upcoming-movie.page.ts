
  import { Component, OnInit } from '@angular/core';
  import { MovieService } from './../../services/movie.service';
  import { Router, NavigationExtras } from '@angular/router';
  
@Component({
  selector: 'app-upcoming-movie',
  templateUrl: './upcoming-movie.page.html',
  styleUrls: ['./upcoming-movie.page.scss'],
})
export class UpcomingMoviePage implements OnInit {

  popular_movies = [];
  image_base = 'https://image.tmdb.org/t/p/w300';
  
    constructor(
      private movieService: MovieService,
      private router: Router
    ) { }
  
    ngOnInit() {
      // get upcoming movie
      this.movieService.getUpcomingMovieLists().subscribe((movies: []) => {
        this.popular_movies = movies['results'];
      })
    }
  
    //open movie details
    openMovie(movie) {
      let navigationExtras: NavigationExtras = {
        state: {
          movie: movie
        }
      };
      this.router.navigate(['/movie-details'], navigationExtras)
    }
  
  }
  
  
  