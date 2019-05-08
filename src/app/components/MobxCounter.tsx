// MobxCounter.tsx
import React from 'react';
import {observer, inject} from 'mobx-react';
import { CounterState } from '../state/CounterState';

interface MobxCounterProps {
    counterState? : CounterState
}
// inject provider's state counterState into component props

@inject('counterState') // pull counterState from provider, inject component props
@observer   // observer subscribe for the changes, calls render function, internally uses autorun
class MobxCounter extends React.Component<MobxCounterProps> {

    incr = () => {
        
        this.props.counterState!.increment();
    }

    render() {
        console.log('MobxCounter Props', this.props);
         
        return (
            <div>
                <h2>MobxCounter</h2>
                <p>Counter {this.props.counterState!.counter} </p>

                <button onClick={this.incr}> +1 </button>
            </div>
        )
    }
}

export default MobxCounter;