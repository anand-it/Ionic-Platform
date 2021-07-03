import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-web',
  templateUrl: './charts-web.page.html',
  styleUrls: ['./charts-web.page.scss'],
})
export class ChartsWebPage implements OnInit {
  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];
  constructor() { 
    
  }

  ngOnInit() {
  }

}
