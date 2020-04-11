import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'movie-categories',
    loadChildren: () => import('./pages/movie-categories/movie-categories.module').then( m => m.MovieCategoriesPageModule)
  },
  {
    path: 'movie-details',
    loadChildren: () => import('./pages/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'popular-movies',
    loadChildren: () => import('./pages/popular-movies/popular-movies.module').then( m => m.PopularMoviesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/get-started/get-started.module').then( m => m.GetStartedPageModule)
  },
  {
    path: 'top-rated-movie',
    loadChildren: () => import('./pages/top-rated-movie/top-rated-movie.module').then( m => m.TopRatedMoviePageModule)
  },
  {
    path: 'upcoming-movie',
    loadChildren: () => import('./pages/upcoming-movie/upcoming-movie.module').then( m => m.UpcomingMoviePageModule)
  },
  {
    path: 'showing-now',
    loadChildren: () => import('./pages/showing-now/showing-now.module').then( m => m.ShowingNowPageModule)
  },
  {
    path: 'movie-watchlist',
    loadChildren: () => import('./pages/movie-watchlist/movie-watchlist.module').then( m => m.MovieWatchlistPageModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
