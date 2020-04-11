import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from './../../services/movie.service';
import { Router, NavigationExtras } from '@angular/router';
import { IonSlides, Platform } from '@ionic/angular';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.page.html',
  styleUrls: ['./get-started.page.scss'],
})
export class GetStartedPage implements OnInit {
  results = [];
  image_base = 'https://image.tmdb.org/t/p/w300';
  movies_1 = [];

  slideOptsTop = {
    slidesPerView: 5,
    freeMode: true,
    pager: true,
    initialSlide: 0,
    speed: 400
  }

  @ViewChild('slideWithNav', { static: true }) slideWithNav: IonSlides;


  constructor(
    private movieService: MovieService,
    private router: Router,
    private platform: Platform

  ) {

    if (this.platform.width() < 500) {
      this.slideOptsTop.slidesPerView = 2;
    }
  }

  ngOnInit() {
    //get latest movies
    this.movieService.getLatestMovieLists().subscribe((movies: []) => {
      this.movies_1 = movies['results'];
      this.slideWithNav.startAutoplay();
    });
  }

  //search by input text
  searching(e) {
    if (e.target.value) {
      this.movieService.searchMoviea(e.target.value).subscribe((movies: []) => {
        this.results = movies['results'];
      })
    } else {
      this.results = [];
    }
  }

//open movie detail
  openMovie(movie) {
    let navigationExtras: NavigationExtras = {
      state: {
        movie: movie
      }
    };
    this.router.navigate(['/movie-details'], navigationExtras)
  }

  //see all latest movies
  toNowShowing(){
    this.router.navigate(['/showing-now'])
  }
}
