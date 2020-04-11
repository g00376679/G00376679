import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieWatchlistPageRoutingModule } from './movie-watchlist-routing.module';

import { MovieWatchlistPage } from './movie-watchlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieWatchlistPageRoutingModule
  ],
  declarations: [MovieWatchlistPage]
})
export class MovieWatchlistPageModule {}
