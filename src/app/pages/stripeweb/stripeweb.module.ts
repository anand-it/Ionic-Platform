import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StripewebPageRoutingModule } from './stripeweb-routing.module';

import { StripewebPage } from './stripeweb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StripewebPageRoutingModule
  ],
  declarations: [StripewebPage]
})
export class StripewebPageModule {}
