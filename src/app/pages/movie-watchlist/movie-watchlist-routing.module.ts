import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieWatchlistPage } from './movie-watchlist.page';

const routes: Routes = [
  {
    path: '',
    component: MovieWatchlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieWatchlistPageRoutingModule {}
