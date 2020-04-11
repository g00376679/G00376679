import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-movie-watchlist',
  templateUrl: './movie-watchlist.page.html',
  styleUrls: ['./movie-watchlist.page.scss'],
})
export class MovieWatchlistPage implements OnInit {
  watchlist = [];
  image_base = 'https://image.tmdb.org/t/p/w300';

  constructor(
    private storage: Storage,
    public toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.storage.get('watchlist').then((val: any[]) => {
      if (Array.isArray(val)) {
        this.watchlist = val;
      } else {
        this.storage.set('watchlist', []);
      }
    });
  }

  removeItem(i) {
    let removed = this.watchlist.splice(i, 1);
    this.storage.set('watchlist', this.watchlist).then(()=>{
      this.presentToast();
    });
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Removed from Wishlist.',
      duration: 2000
    });
    toast.present();
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
