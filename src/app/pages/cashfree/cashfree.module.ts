import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashfreePageRoutingModule } from './cashfree-routing.module';

import { CashfreePage } from './cashfree.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashfreePageRoutingModule
  ],
  declarations: [CashfreePage]
})
export class CashfreePageModule {}
