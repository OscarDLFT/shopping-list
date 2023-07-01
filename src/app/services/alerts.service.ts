import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ShoppingItemsService } from './shopping-items.service';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(
    public alertController: AlertController,
    public shoppinService: ShoppingItemsService,
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

  async presentAlertConfirm(item: string) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de que quieres eliminar el item?',
      buttons: [
        {
          text: 'Cancelar',
          handler: (blah) => {
            // Oculta la ventana del alert
            alert.dismiss();
          },
        },
        {
          text: 'Ok',
          handler: () => {
            this.shoppinService.removeItem(item);
          },
        },
      ],
    });

    await alert.present();
  }

}
