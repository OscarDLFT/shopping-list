import { Component } from '@angular/core';
import { ShoppingItemsService } from '../services/shopping-items.service';
import { AlertController } from '@ionic/angular';
import { AlertsService } from '../services/alerts.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public item: string = '';
  constructor(
    private shoppinService: ShoppingItemsService,
    private alertsService: AlertsService,
  ) {}

  addItem(): void {
    if(this.item && this.item !== ''){
      if(!this.shoppinService.existeItem(this.item)){
        this.shoppinService.addItem(this.item);
        this.item = '';
        this.alertsService.addSuccess();
      } else {
        this.alertsService.addErrorExist();
      }
    } else {
      this.alertsService.addErrorEmpty();
    }
  }
}
