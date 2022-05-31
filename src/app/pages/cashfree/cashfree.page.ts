import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {CFPaymentServiceInstance} from "cashfree-pg-capacitor";
import { HTTP } from '@ionic-native/http/ngx';

const WEB = 'WEB';
const UPI = 'UPI';

const appId = '151155ebd3fda87f41e8259c0f551151'; //Enter your appId here;
const appSecret = '5d103aa139e2ff8ef612ad11d415559980611f7b'; //Enter your appSecret here (not to be used in your production app. use this in your backend api instead).

const env = 'TEST'; //'TEST' or 'PROD'
@Component({
  selector: 'app-cashfree',
  templateUrl: './cashfree.page.html',
  styleUrls: ['./cashfree.page.scss'],
})
export class CashfreePage implements OnInit {





  constructor(  private http:HTTP) {
    this.http.setDataSerializer('json');
  }
  
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getUPIApps();
  }

  async getToken(): Promise<Map<string, string>> {

    const map = new Map<string, string>();

    try {
      const orderID = 'Order' + parseInt((100000000 * Math.random()).toString(), 10);
      map.set('orderId', orderID);
      // @ts-ignore
      const url = (env === 'PROD')? 'https://api.cashfree.com/api/v2/cftoken/order' : 'https://test.cashfree.com/api/v2/cftoken/order';
      const params = {
        // eslint-disable-next-line
        "orderId": orderID,
        // eslint-disable-next-line
        "orderAmount": "1",
        // eslint-disable-next-line
        "orderCurrency": "INR"
      };
      const headers = {
        'x-client-id': appId,
        'x-client-secret': appSecret,
      };

      const response = await this.http.post(url, params, headers);

      map.set('token', JSON.parse(response.data).cftoken);
      console.log(response.status);
      console.log(JSON.parse(response.data)); // JSON data returned by server
      console.log(response.headers);
      return Promise.resolve(map);

    } catch (error) {
      console.log(error.status);
      console.log(error.error); // Error message as string
      console.log(error.headers);
      return  Promise.reject(error);
    }
  }

  async getParams(): Promise<Map<string, string>> {

    try {
      const tokenMap = await this.getToken();

      const map = new Map<string, string>();

      map.set('appId', appId);
      map.set('orderId', tokenMap.get('orderId'));
      map.set('orderCurrency', 'INR');
      map.set('orderAmount', '1');
      map.set('orderNote', 'Test Payment');
      map.set('customerName', 'Cashfree Test Customer');
      map.set('customerPhone', '9999999999');
      map.set('customerEmail', 'cashfreeTest@cashfree.com');

      map.set('notifyUrl', 'https://www.yourwebhook.com');

      map.set('tokenData', tokenMap.get('token'));
      map.set('stage', env);

      return Promise.resolve(map);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  getUPIApps() {
    CFPaymentServiceInstance.getUPIApps().then(this.onGetUPIAppsResponse).catch(this.onUPIError);
  }

  public startPaymentWeb() {
    this.startPayment(WEB, null);
  }

  public startPaymentUPI(upiAppId: string) {
    this.startPayment(UPI, upiAppId);
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  private handleUPIApps(result: any) {
    const array = CFPaymentServiceInstance.transFormUPIResponse(result);
    const buttonArray: string[] = [];
    array.forEach((value => {
      const iconString = value.base64Icon;
      const icon = CFPaymentServiceInstance.getIcon(iconString);
      const button = this.getFormattedIcon(value.displayName, icon, value.id);
      buttonArray.push(button);
    }));
    if (array.length === 0) {
      buttonArray.push(`<ion-text class="upi_app_not_found">No UPI Apps Found</ion-text>`);
      this.changeUPIArray(buttonArray);
    }
    this.changeUPIArray(buttonArray);
  }

  private getFormattedIcon(displayName, icon: string, id) {
    return `<div id="${id}" class="round_icon_buttons">
        <img class="upi_image" src="${icon}" alt="Upi App"/>
        <ion-text class="upi_icons_text">${displayName}</ion-text>
      </div>`;
  }

  private startPayment(mode: string, upiAppId: string) {
    document.getElementById('response_text').innerHTML = 'Response will Show Here';
    this.getParams().then((params) => {
      if (mode === WEB) {
        CFPaymentServiceInstance.startPaymentWEB(params).then(this.onResult).catch(this.onError);
      } else {
        if (upiAppId !== null) {
          params.set('appName', upiAppId);
        }
        CFPaymentServiceInstance.startPaymentUPI(params).then(this.onResult).catch(this.onError);
      }
    }).catch((error) => {
      console.log(error.message);
    });
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  private onResult = (result: Object) => {
    let output = '';
    Object.keys(result).forEach((key) => {
      if (key === 'signature') {
        const shortString = result[key].substring(0, 5).concat('...');
        output = output.concat(`${key} : ${shortString} <br>`);
      } else {
        output = output.concat(`${key} : ${result[key]} <br>`);
      }
    });
    console.log(JSON.stringify(result));
    document.getElementById('response_text').innerHTML = output;
  };

  private onError = (error: any) => {
    console.log(error.message);
  };

  // eslint-disable-next-line @typescript-eslint/ban-types
  private onGetUPIAppsResponse = (result: Object) => {
    // @ts-ignore
    this.handleUPIApps(result);
  };

  private onUPIError = (error: any) => {
    console.log(error.message);
  };

  private changeUPIArray(array: string[]) {
    document.getElementById('upi_icon_containers').innerHTML =
      array.reduce((prevValue, currentValue, index, arrays) => prevValue.concat(currentValue));
    const elements =  document.getElementsByClassName('round_icon_buttons');
    for (let i = 0; i < elements.length; i++) {
      const element = elements.item(i);
      element.addEventListener('click', () => {
         this.startPaymentUPI(element.id);
       });
    }
  }

}
