// MobxCart.tsx
import React from 'react';

import {observer, inject} from 'mobx-react';
import { CartDataItem } from '../models/CartDataItem';

import MobxCartList from './MobxCartList';
import MobxCartSummary from './MobxCartSummary';

import { CartState } from '../state/CartState';

 
interface MobxCartProps {
    cart?: CartState | null
}

interface MobxCartState {
    
}

@inject('cart')
@observer
class MobxCart extends React.Component<MobxCartProps, MobxCartState> {
    constructor(props: MobxCartProps) {
        super(props);
    }

    addItem = () => {
        const id = Math.ceil(Math.random() * 100000);

        const item = new CartDataItem(id, 
                                  `Product ${id}`,
                                  Math.ceil(Math.random() * 100),
                                  1
                                  );

        console.log('adding item ', item);
        this.props.cart!.addItem(item);
    }


    empty = () => {
        this.props.cart!.empty();
    }
  
 

    render() {
        console.log('MobxCart Render');
        let {cart} =  this.props;

        return (
            <div>
                <h2>MobxCart</h2>

                {/* 
                    pass this as props is bad
                    passing complete state as props is bad
                    pass needed properties -- good
                */}

                <button onClick={this.addItem}>
                    Add Item
                </button>

                <button onClick={this.empty}>
                    Empty Cart
                </button>


                <MobxCartList 
                               
                />

                <MobxCartSummary />
            </div>
        )
    }
}

export default MobxCart;