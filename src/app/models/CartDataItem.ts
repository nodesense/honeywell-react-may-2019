// models/CartDataItem.ts
import {observable, action} from 'mobx';

export class CartDataItem {
    @observable  id: number = 0;
    @observable  name: string = '';
    @observable  price: number = 0; 
    @observable   qty: number = 0;
    
    @action setId(id : number) {
        this.id = id;
    }

    @action setName(name : string) {
        this.name = name;
    }

    @action setPrice(price : number) {
        this.price = price;
    }

    @action setQty(qty : number) {
        this.qty = qty;
    }

    constructor( id: number,
                 name: string, 
                 price: number, 
                 qty: number) {
                    

                    this.setId(id);
                    this.setName(name);

                    this.setPrice(price);

                    this.setQty(qty);
                    
    }
}