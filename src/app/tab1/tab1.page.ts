import { Component } from '@angular/core';
import { ShoppingItemsService } from '../services/shopping-items.service';
import { AlertController, MenuController } from '@ionic/angular';
import { AlertsService } from '../services/alerts.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public shoppinService: ShoppingItemsService,
    public alertController: AlertController,
    private alertsService: AlertsService,
    private menuController: MenuController, //para controlar que queremos hacer con el menú
  ) {}

  removeItem(item: string): void {
    this.alertsService.presentAlertConfirm(item);
  }

  /** Con ésta función lo que se hace es que cuando movamos una nota, se complete y sepa que ha terminado ese evento,
   * con el complete()
   * y con el const y la linea de abajo, modificamos el array para que el orden en el array quede igual que cuando lo visualizamos,
   * porque si no, estaria visualmente cambiado pero no en el array de forma interna por lo que al eliminar se eliminaria el incorrecto
   */
  onReaorderItems(event: any): void {
    const item = this.shoppinService.items.splice(event.detail.from, 1)[0];
    this.shoppinService.items.splice(event.detail.to, 0, item)
    event.detail.complete();
  }

  async removeAll() {
      const alert = await this.alertController.create({
        header: 'Confirmación',
        message: '¿Estás seguro de que quieres eliminar todos los items?',
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
              this.shoppinService.removeAllItems();
              this.menuController.close(); // al hacer la acción de borrar los items se cerrará el menú
            },
          },
        ],
      });
  
      await alert.present();
  }

}
