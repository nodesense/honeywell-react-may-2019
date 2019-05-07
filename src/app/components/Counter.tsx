// Counter.tsx
import React, {Component} from 'react';

// read only
interface CounterProps {
    startValue: number;
}

// state, mutation
interface CounterState {
    counter: number;
    flag: boolean;
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
            flag: true
        }

        console.log('Counter comp created');
    }

    // react keyword
    // called after render
    componentDidMount() {
        console.log('Counter componentDidMount')
    }

    // unmount cycle
    // called before removing component from ui
    componentWillUnmount() {
        console.log('Counter componentWillUnmount');
    }

    // update cycle method
    // called after every render function during update
    componentDidUpdate() {
        console.log('Counter componentDidUpdate')
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

        this.setState({
            flag: !this.state.flag
        })

        console.log('after counter ', this.state.counter);
    }

    //ES.NEXT 
    // create one function per component instance +
    // also solve this. context
    decrement = () => {
        console.log('decrement called ')
        this.setState({
            counter: this.state.counter - 1
        })

        console.log('after counter ', this.state.counter);
    }

    decrementBy2 = () => {
        console.log('decrementBy2 called ')
        this.setState({
            counter: this.state.counter - 2
        })

        console.log('after counter ', this.state.counter);
    }


    decrementBy4 = () => {
        console.log('decrementBy4 called ')
        // functional set state
        this.setState( (prevState: CounterState, props: CounterProps) => {
            // return new state
            console.log('decrementBy4 prevState', prevState);
            console.log('decrementBy4 currentState', this.state);
            
            return {
                counter: prevState.counter - 4
            }
        })
    }

    decrementBy8 = () => {
        console.log('decrementBy8 called ')
        // functional set state
        this.setState( (prevState: CounterState, props: CounterProps) => {
            // return new state
            console.log('decrementBy8 prevState', prevState);
            console.log('decrementBy8 currentState', this.state);
            
            return {
                counter: prevState.counter - 8
            }
        })
    }

    decrementBy4And8 = () => {
        console.log('before counter ', this.state.counter);

        this.setState({
            counter: this.state.counter - 4
        }, () => {
            // callback, called after the render function
            // prev state was already updated
            // this calls render again
            this.setState({
                counter: this.state.counter - 8
            })
        })

        // // bug, async setState
        // this.setState({
        //     counter: this.state.counter - 8
        // })

        console.log('after counter ', this.state.counter);

    }

    refresh = () => {
        console.log('refresh called ');
        // trigger render function
        // when there is no state, but still want to call render
        // NOT a GOOD one
        this.forceUpdate();
        this.forceUpdate();
    }

    render() {
        // elsewhere
        // props are available via this.props [props is keyword]
        console.log('Counter render ', this.state.counter);
        
        return (
            <div>
                <h2>Counter</h2>
                <p>Start Value {this.props.startValue}</p>
                <p>flag {this.state.flag.toString()}</p>
                <p>{this.state.counter}</p>
                {/* event accept handler function reference as callback 
                    when event occur, handler function is INVOKED by React framework
                */}
                <button onClick={this.incrementWithCrash} > +1 Crash </button>
                <button onClick={ () => this.increment() } > +1 </button>
                {/* ES.NXT method */}
                <div onClick={this.decrementBy2}>
                    <button onClick={this.decrement} > -1  </button>
                </div>


                <div onClick={this.decrementBy4}>
                    <button onClick={this.decrementBy8} > -4 -8  </button>
                </div>


                <button onClick={this.decrementBy4And8}>
                    SetState with Callback
                </button>

                <div onClick={this.refresh}>
                    <button onClick={this.refresh}>
                        Refresh
                    </button>
                </div>
            </div>
        )
    }
}

export default Counter;