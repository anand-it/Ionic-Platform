import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RazerpayMobilePageRoutingModule } from './razerpay-mobile-routing.module';

import { RazerpayMobilePage } from './razerpay-mobile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RazerpayMobilePageRoutingModule
  ],
  declarations: [RazerpayMobilePage]
})
export class RazerpayMobilePageModule {}
