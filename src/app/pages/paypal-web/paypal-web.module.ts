import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaypalWebPageRoutingModule } from './paypal-web-routing.module';

import { PaypalWebPage } from './paypal-web.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaypalWebPageRoutingModule
  ],
  declarations: [PaypalWebPage]
})
export class PaypalWebPageModule {}
