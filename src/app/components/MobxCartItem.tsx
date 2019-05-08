// MobxCartItem.tsx
import React from 'react';
import { CartDataItem } from '../models/CartDataItem';
import { inject, observer } from 'mobx-react';
import { CartState } from '../state/CartState';

interface CartItemProps {
    cart?: CartState;
    item: CartDataItem;
}

interface CartItemState {
}

@inject('cart')
@observer
class MobxCartItem extends React.Component<CartItemProps, CartItemState> {
    constructor(props: CartItemProps) {
        super(props);
    }

    incrementQty = () => {
        const {id, qty} = this.props.item;
        this.props.cart!.updateItem(id,  qty + 1);
    }

    decrementQty = () => {
        const {id, qty} = this.props.item;
        this.props.cart!.updateItem(id,  qty - 1);
    }
 
    remove = () => {
        this.props.cart!.removeItem(this.props.item.id);
    }

    render() {
        // deconstruct
        const {item} = this.props;

        console.log('CartItem Render ', item.id);
        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>

                <td>
                        <button onClick={this.remove}>
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

export default MobxCartItem;