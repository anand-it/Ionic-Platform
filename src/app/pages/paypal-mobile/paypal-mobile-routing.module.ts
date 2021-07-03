import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaypalMobilePage } from './paypal-mobile.page';

const routes: Routes = [
  {
    path: '',
    component: PaypalMobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaypalMobilePageRoutingModule {}
