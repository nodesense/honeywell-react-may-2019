// CartItem.tsx
import React from 'react';
import { CartDataItem  } from '../models/CartDataItem';

interface CartItemProps {
    item: CartDataItem;
    removeItem: Function;
    updateItem: Function;
}

interface CartItemState {
}

class CartItem extends React.PureComponent<CartItemProps, CartItemState> {
    constructor(props: CartItemProps) {
        super(props);
    }

    incrementQty = () => {
        //this.props.updateItem(this.props.item.id, this.props.item.qty + 1);
        const {id, qty} = this.props.item;
         
        this.props.updateItem(id, qty + 1);
    }

    decrementQty = () => {
        const {id, qty} = this.props.item;
        this.props.updateItem(id, qty - 1);
    }

 

    render() {
        // deconstruct
        const {item, removeItem } = this.props;

        console.log('CartItem Render ', item.id);
        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>

                <td>
                        <button onClick={ () => removeItem(item.id) }>
                            X
                        </button> 

                        <button onClick={this.decrementQty}>
                            -1
                        </button> 

                        <button onClick={this.incrementQty}>
                            +1
                        </button> 
                    </td> 
            </tr>
        )
    }
}

export default CartItem;