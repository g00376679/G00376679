import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingMoviePageRoutingModule } from './upcoming-movie-routing.module';

import { UpcomingMoviePage } from './upcoming-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcomingMoviePageRoutingModule
  ],
  declarations: [UpcomingMoviePage]
})
export class UpcomingMoviePageModule {}
