import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YoutubePageRoutingModule } from './youtube-routing.module';

import { YoutubePage } from './youtube.page';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YoutubePageRoutingModule,
    NgxYoutubePlayerModule
  ],
  declarations: [YoutubePage]
})
export class YoutubePageModule {}
