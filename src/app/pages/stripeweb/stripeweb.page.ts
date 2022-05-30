import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
declare var Stripe;

@Component({
  selector: 'app-stripeweb',
  templateUrl: './stripeweb.page.html',
  styleUrls: ['./stripeweb.page.scss'],
})
export class StripewebPage implements OnInit {

  stripe:any = Stripe('pk_test_51Kt3ukSDDty4XRj1nIANueNuPs8nGL8SSuR99GY9IeMfScqRdQACmxUbzb5zA1YXqvqK8b3jBiwwUTf3t2okL2ti00HDMukVW7');
  card: any;
  currencyIcon:any = "$";
  paymentAmount:any = 100;
  firebaseURL = 'http://localhost:5000/shoppr-c97a7/us-central1/payWithStripe';
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
     this.setupStripe();
  }

  setupStripe() {
    let elements = this.stripe.elements();
    var style = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    this.card = elements.create('card', { style: style });
    console.log(this.card);
    this.card.mount('#card-element');

    this.card.addEventListener('change', event => {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    var form = document.getElementById('payment-form');
    form.addEventListener('submit', event => {
      event.preventDefault();
      console.log(event)

      this.stripe.createSource(this.card).then(result => {
        if (result.error) {
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          console.log(result);
          this.makePayment(result.id);
        }
      });
    });
  }

  makePayment(token) {
    this.http
    .post(this.firebaseURL, {
    amount: 100,
    currency: "usd",
    token: token
    })
    .subscribe(data => {
    console.log(data);
    });
    }

}
