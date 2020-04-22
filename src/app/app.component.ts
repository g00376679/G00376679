import { Component, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MovieService } from './services/movie.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [ // page navigation
    {
      title: 'Home',
      url: 'home',
      icon: 'home-outline'
    },
    {
      title: 'Showing Now',
      url: 'showing-now',
      icon: 'time-outline'
    },
    {
      title: 'Popular',
      url: 'popular-movies',
      icon: 'sunny-outline'
    },
    {
      title: 'Top Rated',
      url: 'top-rated-movie',
      icon: 'thumbs-up-outline'
    },
    {
      title: 'Upcoming',
      url: 'upcoming-movie',
      icon: 'play-outline'
    },
    {
      title:'Movie Watchlist',
      url: 'movie-watchlist',
      icon: 'bookmarks-outline'
    }

  ];
  categories = [];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private movieService: MovieService,
    private router: Router,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    // get current page
    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.url.toLowerCase() === path.toLowerCase());
    }

    this.movieService.getCategoriesList().subscribe((categories => {
      this.categories = categories['genres'];
    }))
    this.router.onSameUrlNavigation = 'reload';

  }

  // open movie page by genres
  openCategory(category) {
    if (this.platform.width() < 500) {
      this.collapseMenu();
    }
    let navigationExtras: NavigationExtras = {
      state: {
        category: category.name,
        categoryId: category.id
      }
    };
    this.router.navigate(['/movie-categories'], navigationExtras);
  }

  //close menu
  collapseMenu() {
    this.menu.close();
  }
}
