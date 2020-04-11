import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingMoviePage } from './upcoming-movie.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingMoviePageRoutingModule {}
