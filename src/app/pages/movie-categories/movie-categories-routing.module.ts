import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieCategoriesPage } from './movie-categories.page';

const routes: Routes = [
  {
    path: '',
    component: MovieCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieCategoriesPageRoutingModule {}
