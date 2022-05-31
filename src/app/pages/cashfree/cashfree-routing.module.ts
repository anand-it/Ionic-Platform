import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashfreePage } from './cashfree.page';

const routes: Routes = [
  {
    path: '',
    component: CashfreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashfreePageRoutingModule {}
