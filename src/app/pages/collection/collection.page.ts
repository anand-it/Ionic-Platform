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
      { collection: 'RazerPay Mobile', url: '/razerpay-mobile' },
      { collection: 'RazerPay Web', url: '/razerpay-web' },
      { collection: 'Chart', url: '/charts' },
      { collection: 'Stripe Mobile', url: '/stripemobile' },
      { collection: 'Stripe Web', url: '/stripeweb' },
      { collection: 'Cash Free', url: '/cashfree' },
     
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
