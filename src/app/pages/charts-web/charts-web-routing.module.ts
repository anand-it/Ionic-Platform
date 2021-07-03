import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartsWebPage } from './charts-web.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsWebPageRoutingModule {}
