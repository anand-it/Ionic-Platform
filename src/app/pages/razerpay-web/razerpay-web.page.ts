import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { ApiService } from 'src/app/providers/api/api.service';
declare var Razorpay: any;
@Component({
  selector: 'app-razerpay-web',
  templateUrl: './razerpay-web.page.html',
  styleUrls: ['./razerpay-web.page.scss'],
})
export class RazerpayWebPage implements OnInit {
  payAmount: any = '100';
  email: any = 'anand@gmail.com';
  mobilenumber: any = '9876543210';
  username: any = 'Anand'

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.initPay();
  }

  
  public initPay(): void {
    var options = {
      "key": "rzp_test_3h2HwRHhaf7HAG", // Enter the Key ID generated from the Dashboard
      "amount": parseFloat(this.payAmount) * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Anand",
      "description": "Test Transaction",
      "image": "https://www.graphicsprings.com/filestorage/stencils/7a0dcc38c57d7746e456c1c6af88b735.png?width=500&height=500",
      // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response) {
        console.log(response.razorpay_payment_id);
        console.log(response.razorpay_order_id);
        console.log(response.razorpay_signature)
      },
      "prefill": {
        "name": this.username,
        "email": this.email,
        "contact":this.mobilenumber
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#251496"
      }
    };
    var rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
    });
    document.getElementById('rzp-button1').onclick = function (e) {
      rzp1.open();
      e.preventDefault();
    }
  }

}
