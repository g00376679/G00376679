import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopRatedMoviePageRoutingModule } from './top-rated-movie-routing.module';

import { TopRatedMoviePage } from './top-rated-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopRatedMoviePageRoutingModule
  ],
  declarations: [TopRatedMoviePage]
})
export class TopRatedMoviePageModule {}
