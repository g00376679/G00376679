import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../services/movie.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-showing-now',
  templateUrl: './showing-now.page.html',
  styleUrls: ['./showing-now.page.scss'],
})
export class ShowingNowPage implements OnInit {
  movies = [];
  image_base = 'https://image.tmdb.org/t/p/w300';

  constructor(
    private movieService: MovieService,
    private router: Router,
  ) { }

  ngOnInit() {
    // get movies showing now
    this.movieService.getLatestMovieLists().subscribe((movies: []) => {
      this.movies= movies['results'];
    });
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
