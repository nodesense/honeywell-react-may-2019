// CounterState.test.ts
import { CounterState } from './CounterState';

test('Counter state test', () => {
     const state = new CounterState();
     expect(state.counter).toBe(0);
     state.increment();
     expect(state.counter).toBe(1);
});