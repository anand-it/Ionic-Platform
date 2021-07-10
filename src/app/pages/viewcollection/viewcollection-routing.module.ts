import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewcollectionPage } from './viewcollection.page';

const routes: Routes = [
  {
    path: '',
    component: ViewcollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewcollectionPageRoutingModule {}
