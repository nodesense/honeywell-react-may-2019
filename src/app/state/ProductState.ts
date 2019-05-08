    // ProductState.ts
    import { Product } from './../models/Product';
    import {observable, action} from 'mobx';

    export class ProductState {
        @observable products: Product[] = [];
        @observable loading: boolean = false;

        @action setProducts(products: Product[]) {
            this.products = products;
            this.loading = false;
        }

        @action fetchProducts() {
            this.loading = true;
            fetch('http://api.nodesense.ai/api/products')
            .then ( (response) => {
                console.log(response);
                return response.json(); // parse the response into js array
            } )
            .then (  (products: Product[]) => {
                console.log('products ', products);
            // this.products = products; 
            this.setProducts(products);
            })
        }
    }