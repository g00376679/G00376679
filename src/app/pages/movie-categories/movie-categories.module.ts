import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieCategoriesPageRoutingModule } from './movie-categories-routing.module';

import { MovieCategoriesPage } from './movie-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieCategoriesPageRoutingModule
  ],
  declarations: [MovieCategoriesPage]
})
export class MovieCategoriesPageModule {}
