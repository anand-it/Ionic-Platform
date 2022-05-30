import { Component, OnInit } from '@angular/core';
import { Stripe } from '@ionic-native/stripe/ngx';

@Component({
  selector: 'app-stripemobile',
  templateUrl: './stripemobile.page.html',
  styleUrls: ['./stripemobile.page.scss'],
})
export class StripemobilePage implements OnInit {
  cardDetails:any;
  stripe_key:any = "pk_live_d2ObknL5GshCnmpu5cQwDnRv";
  constructor(private stripe:Stripe) { }

  ngOnInit() {
  }

  payWithStripe() {
    this.stripe.setPublishableKey(this.stripe_key);

    this.cardDetails = {
      number: '4242424242424242',
      expMonth: 12,
      expYear: 2025,
      cvc: '220'
    }

    this.stripe.createCardToken(this.cardDetails)
      .then(token => {
        console.log(token);
        // this.makePayment(token.id);

      })
      .catch(error => console.error(error));
  }

}
