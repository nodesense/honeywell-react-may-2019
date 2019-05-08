// configureStore.ts

import { CartState } from './app/state/CartState';
import { ProductState } from './app/state/ProductState';
import { CounterState } from './app/state/CounterState';
 
// store is collection of states
export interface Store {
    counterState: CounterState;
    productState: ProductState;
    cart: CartState;
}

// create store
const store: Store = {
    counterState: new CounterState(),
    productState: new ProductState(),
    cart: new CartState()
}

export default store;