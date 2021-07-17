import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/providers/api/api.service';
import * as Hammer from 'hammerjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  profileList: any = []
  selectedimages: any;
  index: any
  eventText: any;
  constructor(private api: ApiService,
    private router: Router) {
    this.profileList = [
      {
        images: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3VzdG9tZXIlMjBzZXJ2aWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        name: 'Priyanka',
        address: '777 Brockton Avenue, Abington MA 2351'
      },
      {
        images: 'https://www.callcentrehelper.com/images/stories/2011/04/expert-agent-760.jpg',
        name: 'Raj Kumar',
        address: '250 Hartford Avenue, Bellingham MA 2019'
      },
      {
        images: 'https://assets.entrepreneur.com/content/3x2/2000/20200310160536-GettyImages-1132874986.jpeg',
        name: 'Anand',
        address: '55 Brooksby Village Way, Danvers MA 1923'
      },
      {
        images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ9J69fbLKJoDIDGXrsKLfF7QmIzwa1Rvx9x9TFlzQdVcGW0trY_8NoebrniEs-3_5en4&usqp=CAU',
        name: 'Roja',
        address: '550 Providence Hwy, Walpole MA 2081'
      },
      {
        images: 'https://onequote.ie/wp-content/uploads/2016/05/customercare.jpg',
        name: 'Ranga shree',
        address: '141 Washington Ave Extension, Albany NY 12205'
      }
    ]
  }

  ngOnInit() {
    this.selectedimages = this.profileList[0]
    this.index = 0
    this.swipe();
  }
  
  change(string) {
    if( this.index  < this.profileList.length -1 ){
      this.index = this.index + 1
      this.selectedimages = this.profileList[this.index]
    }
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
  gotocollection(index) {
    let navigationExtras: any = {
      queryParams: {
        profile: JSON.stringify(this.profileList[index]),
      }
    }
    this.router.navigate(['/viewcollection'], navigationExtras);
  }

 

  swipe() {
    var myElement = document.getElementById('myElement');
    var mc = new Hammer(myElement);

    //enable all directions
    mc.get('swipe').set({
      direction: Hammer.DIRECTION_ALL,
      threshold: 1,
      velocity: 0.1
    });

    // listen to events...
    mc.on("swipeup swipeleft swiperight", (ev) => {
      // myElement.textContent = ev.type + " gesture detected.";
      console.log(ev.type)
      this.modify(ev)
    }),(err)=>{
     
    };
  }

  modify(ev:string) {
    let swipe:any = ev;
    if( this.index  < this.profileList.length -1 ){
      this.index = this.index + 1
      this.selectedimages = this.profileList[this.index]
    }
   
    if(swipe.type == 'swipeup'){
      this.api.presentToast('Shortlisted');
      console.log('Shortlisted')
    }else if(swipe.type == 'swipeleft'){
      this.api.presentToast('Not Interested');
      console.log('Not Interested')
    } else if(swipe.type == 'swiperight'){
      this.api.presentToast('Interested');
      console.log('Interested')
    }
  }

}
