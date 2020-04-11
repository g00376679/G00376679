import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopRatedMoviePage } from './top-rated-movie.page';

const routes: Routes = [
  {
    path: '',
    component: TopRatedMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopRatedMoviePageRoutingModule {}
