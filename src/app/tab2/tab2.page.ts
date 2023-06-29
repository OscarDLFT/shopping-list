import { Component } from '@angular/core';
import { ShoppingItemsService } from '../services/shopping-items.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public item: string = '';
  constructor(
    private shoppinService: ShoppingItemsService,
  ) {}

  addItem(): void {
    if(this.item && this.item !== ''){
      if(this.shoppinService.existeItem(this.item)){
        this.shoppinService.addItem(this.item);
        this.item = '';
        //mensaje exito
      } else {
        //error existe
      }
    } else {
      //error
    }
  }
}
