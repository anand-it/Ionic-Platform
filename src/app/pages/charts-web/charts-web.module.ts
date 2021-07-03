import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartsWebPageRoutingModule } from './charts-web-routing.module';

import { ChartsWebPage } from './charts-web.page';
import { NgxChartsModule }from '@swimlane/ngx-charts';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsWebPageRoutingModule,
    NgxChartsModule
  ],
  declarations: [ChartsWebPage]
})
export class ChartsWebPageModule {}
