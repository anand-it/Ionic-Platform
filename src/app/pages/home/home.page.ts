import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/providers/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  profileList:any = []
  selectedimages:any;
  index:any
  constructor(private api:ApiService,
    private router:Router) {
    this.profileList = [
      {images:'https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3VzdG9tZXIlMjBzZXJ2aWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      name:'Priyanka',
      address:'777 Brockton Avenue, Abington MA 2351'},
     {images:'https://www.callcentrehelper.com/images/stories/2011/04/expert-agent-760.jpg',
      name:'Raj Kumar',
     address:'250 Hartford Avenue, Bellingham MA 2019'},
      {images:'https://lh3.googleusercontent.com/proxy/0-rX1iniDv2tTjCOuVUiN_gcVS_kB5v0aBCpHdSLk6gEti4UR_S5INluOYZKKC3Jytob6RAcmMWgKoFx1Lomq0B6tOneibBPJiEMwgQerMiyK0QlAdN1KwJu4wxn2ec-meiIgN0CZ330vbSNKFnDpQ',
      name:'Anand',
      address:'55 Brooksby Village Way, Danvers MA 1923'},
      {images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ9J69fbLKJoDIDGXrsKLfF7QmIzwa1Rvx9x9TFlzQdVcGW0trY_8NoebrniEs-3_5en4&usqp=CAU',
      name:'Roja',
      address:'550 Providence Hwy, Walpole MA 2081'},
      {images:'https://onequote.ie/wp-content/uploads/2016/05/customercare.jpg',
      name:'Ranga shree',
      address:'141 Washington Ave Extension, Albany NY 12205'}
    ]
   }

  ngOnInit() {
    this.selectedimages = this.profileList[0]
    this.index = 0 
  }
  change(string){
    this.index =  this.index +1
    this.selectedimages = this.profileList[this.index]
    if(string == 'short'){
      this.api.presentToast('Shortlisted');
      console.log('Shortlisted')
    }else if(string == 'close'){
      this.api.presentToast('Not Interested');
      console.log('Not Interested')
    }else if(string == 'yes'){
      this.api.presentToast('Interested');
      console.log('Interested')
    }
    
  }
  gotocollection(index){
    let navigationExtras: any = {
      queryParams: {
        profile: JSON.stringify(this.profileList[index]),
      }
    }
    this.router.navigate(['/viewcollection'], navigationExtras);
  }

}
