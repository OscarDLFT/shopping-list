import { Component } from '@angular/core';
import { ShoppingItemsService } from '../services/shopping-items.service';
import { AlertController } from '@ionic/angular';
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
  ) {}

  removeItem(item: string): void {
    this.alertsService.presentAlertConfirm(item);
  }

}
