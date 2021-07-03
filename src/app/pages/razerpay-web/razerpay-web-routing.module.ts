import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RazerpayWebPage } from './razerpay-web.page';

const routes: Routes = [
  {
    path: '',
    component: RazerpayWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RazerpayWebPageRoutingModule {}
