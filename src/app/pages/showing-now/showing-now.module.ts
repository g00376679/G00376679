import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowingNowPageRoutingModule } from './showing-now-routing.module';

import { ShowingNowPage } from './showing-now.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowingNowPageRoutingModule
  ],
  declarations: [ShowingNowPage]
})
export class ShowingNowPageModule {}
