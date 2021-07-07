import { Component, OnInit } from '@angular/core';
declare var RazorpayCheckout: any;
@Component({
  selector: 'app-razerpay-mobile',
  templateUrl: './razerpay-mobile.page.html',
  styleUrls: ['./razerpay-mobile.page.scss'],
})
export class RazerpayMobilePage implements OnInit {
  payAmount:any = '100';
  email:any = 'anand@gmail.com';
  mobilenumber:any = '9876543210';
  username:any ='Anand'
  constructor() { }

  ngOnInit() {
  }

  pay(){
    this.payWithRazorpay(response => {

    });
  }

  payWithRazorpay(callback) {
    // alert(JSON.stringify(this.subscription.accountApikey))
    // alert(JSON.stringify(this.subscription.accountType))
    // alert(JSON.stringify(this.subscription.profilePhoto))
    var options = {
      description: 'Order Details',
      image: "https://www.graphicsprings.com/filestorage/stencils/7a0dcc38c57d7746e456c1c6af88b735.png?width=500&height=500",
      currency: "INR", // your 3 letter currency code
      key: "rzp_test_3h2HwRHhaf7HAG", // your Key Id from Razorpay dashboard -- test Mode
      // key: "rzp_live_NOKLxfEFYtOVRM", // your Key Id from Razorpay dashboard -- Live Mode
      amount: parseFloat(this.payAmount) * 100, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'Anand',
      // accountType: this.subscription.accountType,
      prefill: {
        email: this.email,
        contact: this.mobilenumber,
        name: this.username
      },
      theme: {
        color: '#251496'
      },
      modal: {
        ondismiss: function () {
          this.api.presentToast('dismissed');
        }
      }
    };

    var successCallback = function (payment_id) {
      callback(payment_id);
    };

    var cancelCallback = function (error) {
      this.api.presentToast(error.description + ' (Error ' + error.code + ')');
    };
    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }
}
