import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from './../../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.page.html',
  styleUrls: ['./movie-review.page.scss'],
})
export class MovieReviewPage implements OnInit {
  @Input() movieId: string;

  reviews: any = [];
  // movieId = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    public modalController: ModalController
  ) {
  }

  ngOnInit() {
    //get all reviews
    this.movieService.getReviewByMovie(this.movieId).subscribe((reviews: any[]) => {
      this.reviews = reviews['results'];
    })
  }

  close(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
