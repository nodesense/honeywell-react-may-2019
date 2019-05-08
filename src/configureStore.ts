// configureStore.ts

import { ProductState } from './app/state/ProductState';
import { CounterState } from './app/state/CounterState';
 
// store is collection of states
export interface Store {
    counterState: CounterState;
    productState: ProductState;
}

// create store
const store: Store = {
    counterState: new CounterState(),
    productState: new ProductState(),
}

export default store;