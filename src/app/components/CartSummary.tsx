// CartSummary.tsx
import React from 'react';

// from parent
interface CartSummaryProps {
    amount: number;
    count: number;
}

// state, local
interface CartSummaryState {
    discount: number;
    grandTotal: number;
}
  
//PureComponent is a derived class from Component
// PureComponent implements shouldComponentUpdate method
// compare this.props with nextprops
// compare this.state with nextState, if any diff found, return true else false

class CartSummary extends React.PureComponent<CartSummaryProps, CartSummaryState> {
    constructor(props: CartSummaryProps) {
        super(props);
        this.state = {
            // to be computed
            discount: 0,
            grandTotal: 0
        }
    }

    //TODO
    static getDerivedStateFromProps(props: CartSummaryProps, 
                                    state: CartSummaryState) {
        let discount = 0;
        let grandTotal = 0;

        if (props.count >= 10) {
            discount = 20;
        }  else if (props.count >= 5) {
            discount = 10;
        }

        grandTotal = props.amount - (props.amount * discount/100.0);

        // return new state
        return {
            discount,
            grandTotal
        };

    }

    // example
    // shouldComponentUpdate(nextProps: CartSummaryProps, nextState: CartSummaryState) {
    //     return nextProps.amount != this.props.amount ||
    //             nextProps.count != this.props.count ||
    //             nextState.discount != this.state.discount ||
    //             nextState.grandTotal != this.state.grandTotal;
    // }
   

    render() {
        console.log('CartSummary render');
        return (
            <div>
                <h2>Cart Summary</h2>
                <p> Amount : {this.props.amount} </p>
                <p> Count : {this.props.count} </p>
                <p> Discount : {this.state.discount} </p>
                <p> grandTotal : {this.state.grandTotal} </p>
            </div>
        )
    }
}

export default CartSummary;