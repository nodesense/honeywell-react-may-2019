// CounterState.ts
import {observable, action} from 'mobx';

export class CounterState {
    @observable counter = 0;

    // use action for all mutation
    @action increment() {
        this.counter++;
    }

    @action decrement() {
        this.counter--;
    }
}