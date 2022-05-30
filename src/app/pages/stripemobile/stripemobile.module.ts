import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StripemobilePageRoutingModule } from './stripemobile-routing.module';

import { StripemobilePage } from './stripemobile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StripemobilePageRoutingModule
  ],
  declarations: [StripemobilePage]
})
export class StripemobilePageModule {}
