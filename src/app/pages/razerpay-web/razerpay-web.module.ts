import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RazerpayWebPageRoutingModule } from './razerpay-web-routing.module';

import { RazerpayWebPage } from './razerpay-web.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RazerpayWebPageRoutingModule
  ],
  declarations: [RazerpayWebPage]
})
export class RazerpayWebPageModule {}
