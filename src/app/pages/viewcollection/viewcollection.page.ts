import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/providers/api/api.service';

@Component({
  selector: 'app-viewcollection',
  templateUrl: './viewcollection.page.html',
  styleUrls: ['./viewcollection.page.scss'],
})
export class ViewcollectionPage implements OnInit {
  profile:any;
  constructor(private route:ActivatedRoute,
    private api:ApiService) {
    this.route.queryParams.subscribe(params => {
      this.profile = JSON.parse(params['profile']);
    });
   }

  ngOnInit() {
  }

  slideChanged(slider) {
    slider.startAutoplay();
  }

  change(string) {
   
    if (string == 'short') {
      this.api.presentToast('Shortlisted');
      console.log('Shortlisted')
    } else if (string == 'close') {
      this.api.presentToast('Not Interested');
      console.log('Not Interested')
    } else if (string == 'yes') {
      this.api.presentToast('Interested');
      console.log('Interested')
    }

  }
}
