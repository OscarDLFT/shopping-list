import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(
    public alertController: AlertController,
  ) { }

  /** Para mostrar un alert de ok */
  async addSuccess() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Éxito',
      message: 'Item añadido',
      buttons: ['OK'],
    });

    await alert.present();
  }

  /** Para mostrar un alert de error */
  async addErrorExist() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'El item ya existe',
      buttons: ['OK'],
    });

    await alert.present();
  }

  /** Para mostrar un alert de error */
  async addErrorEmpty() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Debes escribir un item',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
