import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd, NavigationExtras } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-movie-categories',
  templateUrl: './movie-categories.page.html',
  styleUrls: ['./movie-categories.page.scss'],
})
export class MovieCategoriesPage implements OnInit {

  categoryName = '';
  categoryId = '';
  movies = [];
  image_base = 'https://image.tmdb.org/t/p/w300';
  fallbackimg = 'https://via.placeholder.com/300x450'
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {
  }

  getCategoryMovie(id) {
    // get movie by genre
    this.movieService.getMoviesByCategory(id).subscribe((response: any) => {
      this.movies = response['results'];
    })
  }

  ngOnInit() {
    // on same route, refresh the movie list base on genre selected
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.categoryName = this.router.getCurrentNavigation().extras.state.category;
          this.categoryId = this.router.getCurrentNavigation().extras.state.categoryId;
          this.getCategoryMovie(this.categoryId);
        } else {
          this.router.navigateByUrl('/')
        }
      });
    });
  }

  //go to detail page
  openMovie(movie) {
    let navigationExtras: NavigationExtras = {
      state: {
        movie: movie
      }
    };
    this.router.navigate(['/movie-details'], navigationExtras)
  }
}
