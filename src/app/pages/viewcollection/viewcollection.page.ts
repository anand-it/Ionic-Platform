import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewcollection',
  templateUrl: './viewcollection.page.html',
  styleUrls: ['./viewcollection.page.scss'],
})
export class ViewcollectionPage implements OnInit {
  profile:any;
  constructor(private route:ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.profile = JSON.parse(params['profile']);
    });
   }

  ngOnInit() {
  }

  slideChanged(slider) {
    slider.startAutoplay();
  }

}
