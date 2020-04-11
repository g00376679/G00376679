import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';
import { Platform } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { MovieReviewPage } from '../movie-review/movie-review.page';
import { AddReviewPage } from '../add-review/add-review.page';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movie: any;
  canAddToWishlist: boolean = true;
  constructor(
    private route: ActivatedRoute, private router: Router,
    private movieService: MovieService,
    private browserTab: BrowserTab,
    private platform: Platform,
    public modalController: ModalController,
    private storage: Storage,
    public toastController: ToastController
  ) {
    //get movie data passed in
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.movie = this.router.getCurrentNavigation().extras.state.movie;
      } else {
        this.router.navigateByUrl('/')
      }
    });
  }

  ngOnInit() {
    this.checkMovie();
  }

  //check if movie in wishlist
  checkMovie() {
    this.storage.get('watchlist').then((val: any[]) => {
      if (Array.isArray(val)) {
        let a = val.find(e=> e.id == this.movie.id);
        if(a){
          this.canAddToWishlist = false;
        }
      } else {
      }
    });
  }

  // open review page
  async openReviews() {
    const modal = await this.modalController.create({
      component: MovieReviewPage,
      componentProps: {
        movieId: this.movie.id
      }
    });
    return await modal.present();
  }

  async addReview() {
    const modal = await this.modalController.create({
      component: AddReviewPage,
      componentProps: {
        movie: this.movie
      }
    });
    return await modal.present();
  }


  //watch trailer video
  watch() {
    this.movieService.getVideos(this.movie.id).subscribe((videos: any) => {
      if (videos.results.length) {
        let vid = videos.results.find(e => e.site == 'YouTube').key;
        if (vid) {
          this.openVideo(vid)
        }
      }

    })
  }

  //open video plugin
  openVideo(videoid) {
    let videolink = 'http://www.youtube.com/embed/' + videoid + '?autoplay=1&fs=1';
    try {
      // check plugin availability
      if (this.platform.is('cordova')) {
        this.browserTab.isAvailable()
          .then(isAvailable => {
            if (isAvailable) {
              this.browserTab.openUrl(videolink);
            } else {
              window.open(videolink, '_system');
            }
          });
      } else {
        //open video in browser new window
        window.open(videolink, '_blank', 'location=yes,height=800,width=800,scrollbars=yes,status=yes');
      }
    } catch (error) {
    }
  }

  addToFavorite() {
    // get watchlist in storage
    this.storage.get('watchlist').then((val: any[]) => {
      //set wishlist
      if (Array.isArray(val)) {
        val.push(this.movie);
        this.storage.set('watchlist', val);
      } else {
        this.storage.set('watchlist', Array.from(this.movie));
      }
      this.canAddToWishlist = false;
      this.presentToast();
    });
  }

// toast 
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Added to Wishlist.',
      duration: 2000
    });
    toast.present();
  }

}
