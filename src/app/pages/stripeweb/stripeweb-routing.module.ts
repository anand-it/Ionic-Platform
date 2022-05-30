import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StripewebPage } from './stripeweb.page';

const routes: Routes = [
  {
    path: '',
    component: StripewebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StripewebPageRoutingModule {}
