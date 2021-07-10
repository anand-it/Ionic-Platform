import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private toastController:ToastController) { 
    
  }
  async presentToast(data:any) {
    const toast = await this.toastController.create({
      message: data,
      duration: 2000
    });
    toast.present();
  }
}
