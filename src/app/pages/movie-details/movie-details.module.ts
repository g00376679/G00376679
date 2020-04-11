import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDetailsPageRoutingModule } from './movie-details-routing.module';

import { MovieDetailsPage } from './movie-details.page';
import { MovieReviewPage } from '../movie-review/movie-review.page';
import { AddReviewPage } from './../add-review/add-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieDetailsPageRoutingModule
  ],
  declarations: [MovieDetailsPage, MovieReviewPage, AddReviewPage],
  entryComponents: [MovieReviewPage, AddReviewPage]
})
export class MovieDetailsPageModule {}
