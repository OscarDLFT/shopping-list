import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingItemsService {
  private _items: string[] = [];
  private _isEmpty: boolean = true;
  
  constructor() {}

  public get items(): string[] {
    return this._items;
  }
  
  public set items(value: string[]) {
    this._items = value;
  }

  public get isEmpty(): boolean {
    return this._isEmpty;
  }

  public set isEmpty(value: boolean) {
    this._isEmpty = value;
  }

  /** Servicio que añade un elemento */
  addItem(item: string){
    this.items.push(item);
    this.isEmpty = false;
  }

  //#region Métodos

  /** Servicio que elimina un elemento */
  removeItem(item: string){
    let index = this.items.findIndex(i => i === item);
    this.items.splice(index, 1);

    if(this.items.length === 0){
      this.isEmpty = true;
    }
  }

  /** Elimina todos los elementos del array */
  removeAllItems(){
    this.items = [];
    this.isEmpty = true;
  }

  /** Encontramos el elemento en el array para saber si ya existe o no*/
  existeItem(item: string){
    const itemFound = this.items.find(x => x.toLocaleLowerCase().trim() === item);
    if(itemFound){
      return true;
    }

    return false;
  }

  //#endregion Métodos
}
