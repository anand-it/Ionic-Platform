import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaypalWebPage } from './paypal-web.page';

const routes: Routes = [
  {
    path: '',
    component: PaypalWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaypalWebPageRoutingModule {}
