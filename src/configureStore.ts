// configureStore.ts
import { CounterState } from './app/state/CounterState';

// store is collection of states

export interface Store {
    counterState: CounterState;
}

// create store
const store: Store = {
    counterState: new CounterState()
}

export default store;