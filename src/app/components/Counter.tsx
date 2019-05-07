// Counter.tsx
import React, {Component} from 'react';

// read only
interface CounterProps {
    startValue: number;
}

// state, mutation
interface CounterState {
    counter: number
}

//React.Component is same as Component
// Props are immutable in the child component
class Counter extends Component<CounterProps, CounterState> {
    // for class component
    // for constructor, props are passed as argument
    constructor(props: CounterProps) {
        super(props); // MUST

        // react keyword
        // mutate the values inside the state
        // state is owned by component
        // state is applicable only for class component
        this.state = {
            counter: props.startValue, // initialize component state from props
        }
        
    }

    // member function
    // event handler
    // first parameter is an event object
    incrementWithCrash(event: any) {
        // this is undefined, as incrementWithCrash is invoked by react 
        console.log('Counter incrementWithCrash', this);
        console.trace(); // to print callstack
        console.log('event object', event);

        console.log('counter ', this.state.counter)
    }

    increment() {
        console.log('Counter increment', this);
         
        console.log('before counter ', this.state.counter)
        
        //react keyword, defined in base class
        // accept new state, and then update the this.state
        // trigger the render function
        // async function
        this.setState({
            counter: this.state.counter + 1
        })

        console.log('after counter ', this.state.counter);
    }

    //ES.NEXT 
    // create one function per component instance +
    // also solve this. context
    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })

        console.log('after counter ', this.state.counter);
    }


    render() {
        // elsewhere
        // props are available via this.props [props is keyword]
        console.log('Counter render ', this.state.counter);
        
        return (
            <div>
                <h2>Counter</h2>
                <p>Start Value {this.props.startValue}</p>
                <p>{this.state.counter}</p>
                {/* event accept handler function reference as callback 
                    when event occur, handler function is INVOKED by React framework
                */}
                <button onClick={this.incrementWithCrash} > +1 Crash </button>

                <button onClick={ () => this.increment() } > +1 </button>

                {/* ES.NXT method */}
                <button onClick={this.decrement} > -1  </button>


            </div>
        )
    }
}

export default Counter;