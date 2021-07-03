import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.page.html',
  styleUrls: ['./youtube.page.scss'],
})
export class YoutubePage implements OnInit {
  player: YT.Player;
  public id: string = 'DiItGE3eAyQ';
  constructor() { }

  ngOnInit() {
  }

  savePlayer(player) {
    this.player = player;
    // console.log("player instance", player);
  }
  onStateChange(event) {
    // console.log("player state", event.data);
  }

  // this.player.pauseVideo();

}
