import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RazerpayMobilePage } from './razerpay-mobile.page';

const routes: Routes = [
  {
    path: '',
    component: RazerpayMobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RazerpayMobilePageRoutingModule {}
