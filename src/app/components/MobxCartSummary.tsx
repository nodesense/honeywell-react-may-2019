// MobxCartSummary.tsx
import React from 'react';
import { CartState } from '../state/CartState';
import { inject, observer } from 'mobx-react';
import {FormattedNumber} from 'react-intl';

// from parent
interface CartSummaryProps {
    cart? : CartState
}

// state, local
interface CartSummaryState {
     
} 

@inject('cart')
@observer
class MobxCartSummary extends React.Component<CartSummaryProps, CartSummaryState> {
    constructor(props: CartSummaryProps) {
        super(props);
         
    }
 
    render() {
        console.log('CartSummary render');

        const cart = this.props.cart;

        // const discount = cart!.discount;
        // const grandTotal = cart!.grandTotal;

        return (
            <div>
                <h2>Cart Summary</h2>
                <FormattedNumber value={cart!.amount} />
                <p> Amount : {cart!.amount} </p>
                <p> Count : {cart!.count} </p>
                <p> Discount : {cart!.discount} </p>
                <p> grandTotal : {cart!.grandTotal} </p>
            </div>
        )
    }
}

export default MobxCartSummary;