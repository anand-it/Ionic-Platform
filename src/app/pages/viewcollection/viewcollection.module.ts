import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewcollectionPageRoutingModule } from './viewcollection-routing.module';

import { ViewcollectionPage } from './viewcollection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewcollectionPageRoutingModule
  ],
  declarations: [ViewcollectionPage]
})
export class ViewcollectionPageModule {}
