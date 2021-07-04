import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.page.html',
  styleUrls: ['./collection.page.scss'],
})
export class CollectionPage implements OnInit {
  myCollectionList: any = []
  filteredItems: any;
  constructor(private router:Router) {
    this.myCollectionList = [
      { collection: 'Youtube Player', url: '/youtube' },
      { collection: 'Geolocation', url: '/geolocation' },
      { collection: 'Google Maps', url: '/googlemaps' },
      { collection: 'PayPal Mobile', url: '/paypal-mobile' },
      { collection: 'PayPal Web', url: '/paypal-web' },
      { collection: 'RazerPay Mobile', url: '/razerpay-web' },
      { collection: 'RazerPay Web', url: '/razerpay-mobile' },
      { collection: 'Chart', url: '/charts' },
      // { collection: 'Chart Web', url: '/charts-web' },
     
    ]
  }

  ngOnInit() {
    this.assignCopy();
  }

  assignCopy() {
    this.filteredItems = this.myCollectionList;
  }

  filterItem(value) {
    if (!value) {
      this.assignCopy();
    }

    this.filteredItems = this.myCollectionList.filter(
    collection => collection.collection.toLowerCase().indexOf(value.toLowerCase()) > -1);
  }

  gotoUrl(i:any){
    this.router.navigate([this.filteredItems[i].url])
  }

}
