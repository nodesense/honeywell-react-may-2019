// Checkout.tsx
import React from 'react';
import { CounterState } from '../state/CounterState';
import {inject, observer} from 'mobx-react';

interface CheckoutProps {
    counterState?: CounterState
}

interface CheckoutState {
    fullName: string;
    email: string;
    city: string;
}

type StateKeys = keyof CheckoutState;

// Ref is Reference to REAL DOM element
// scope is limited within component

@inject('counterState')
@observer
class Checkout extends React.Component<CheckoutProps, CheckoutState> {
    // ! nullable
   // fullNameElement!: HTMLElement; // HTMLElement

    private fullNameElement = React.createRef<HTMLInputElement>()
    notesRef: any;


    constructor(props: CheckoutProps) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            city: ''
        }
    }


    // TypeScript compatiblity
    dynSetState = <T extends string> (key: StateKeys, value: string) => {
        this.setState({
          [key]: value
        } as Pick<CheckoutState, keyof CheckoutState>)
    }

    handleChange = (event: any) => {
        // target is a real dom element input, select
        const target = event.target; 
        console.log(target.name, target.value);
        //TODO: update the state
        // this.setState({
        //     fullName: target.value
        // })

        this.dynSetState(target.name, target.value);
    }

    componentDidMount() {
         const node = this.fullNameElement.current;
         node!.focus();
         this.notesRef.textContent = 'Enter your Details';
 
    }

    render() {
        console.log('Checkout render');
        return (
            <div>
                <h2>Checkout</h2>
                <p>Counter value {this.props.counterState!.counter} </p>
                <form>
                    <p ref={ pElem => this.notesRef = pElem } >Fill Details</p>

                    Full Name
                     <input name="fullName" 
                            type="text" 
                            value={this.state.fullName}
                            onChange={this.handleChange}

                            ref={ this.fullNameElement }
                            />


                    

                     Email
                     <input name="email" 
                            type="text" 
                            value={this.state.email}
                            onChange={this.handleChange}
                            />

                     City 
                     <select name="city"
                            value={this.state.city}
                            onChange={this.handleChange}
                     >
                        <option value="blr">Bangalore</option>
                        <option value="chennai">Chennai</option>
                        <option value="pune">Pune</option>
                     </select>
                </form>
            </div>
        )
    }
}

export default Checkout;