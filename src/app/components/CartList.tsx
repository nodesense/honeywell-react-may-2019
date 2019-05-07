// CartList.tsx

import React from 'react';
import {CartDataItem}  from '../models/CartDataItem';

import CartItem from './CartItem';
 
interface CartListProps {
    items: CartDataItem[],
    removeItem: Function,
    updateItem: Function
}
 
class CartList extends React.PureComponent<CartListProps> {
    constructor(props: CartListProps) {
        super(props);
    }

    // return true - will call render function
    // return false - doesn't call render function
    // called on update cycle
    // called when this.setState
    // called when parent render called
    // shouldComponentUpdate(nextProps: CartListProps, nextState: any ) {
    //     console.log('CartList shouldComponentUpdate');
    //     console.log('current props ', this.props);
    //     console.log('next props ', nextProps);
        
    //     console.log('nextProps.items !== this.props.items', 
    //                     nextProps.items !== this.props.items);

    //     return nextProps.items !== this.props.items; // render only if any diff
    // }
 
    render() {
        console.log('CartList render');

        // deconstruct
        const {items, 
              removeItem, 
              updateItem} = this.props;
 

        return (
            <div>
                <h2> Cart List </h2>
                {/* todo */}
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Ops</th>
                    </tr>
                    </thead>
                    <tbody>
                        {/* TODO: list the items 
                            key is a react keyword
                        */}
                        {
                            items.map ( item => (
                                <CartItem item={item} 
                                          key={item.id} 
                                          updateItem={updateItem}
                                          removeItem={removeItem}
                                          
                                          />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CartList;