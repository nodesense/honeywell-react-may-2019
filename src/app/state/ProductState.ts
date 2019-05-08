// ProductState.ts
import { Product } from './../models/Product';
import {observable, action} from 'mobx';

export class ProductState {
    @observable products: Product[] = [];

    @action fetchProducts() {
        fetch('http://api.nodesense.ai/api/products')
        .then ( (response) => {
            console.log(response);
            return response.json(); // parse the response into js array
        } )
        .then ( (products: Product[]) => {
            this.products = products;
        })
    }
}