// Cart.tsx
import React from 'react';
import { CartDataItem } from '../models/CartDataItem';

import CartList from './CartList';
import CartSummary from './CartSummary';

interface CartProps {
}

interface CartState {
    items: CartDataItem[];
    amount: number; // derived state
    count: number; // derived state
    flag: boolean; //dummy
}

class Cart extends React.Component<CartProps, CartState> {
    constructor(props: CartProps) {
        super(props);

        // initialize state 
        this.state = {
            items: [  new CartDataItem(1, "P1", 100, 1) ],
            amount: 0,
            count: 0,
            flag: true
        }
    }

    //react keyword
    static getDerivedStateFromProps(props: CartProps, state:CartState) {
        //return new state
        let amount = 0;
        let count = 0;

        for (const item of state.items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        // return new state
        return {
            amount, // amount: amount
            count
        }
    }

    addItem = () => {
        const id = Math.ceil(Math.random() * 100000);

        const item = new CartDataItem(id, 
                                  `Product ${id}`,
                                  Math.ceil(Math.random() * 100),
                                  1
                                  );

        //TODO

        this.setState({
            // clone the items and add the new item at the end
            items: [...this.state.items, item]
        })
         
        // calculate the result
    }

    // Demo only
    bulkItems = () => {

        const items = [...this.state.items];

        for (let i = 0; i < 200; i++) {
            const id = Math.ceil(Math.random() * 100000);

            const item = new CartDataItem(id, 
                `Product ${id}`,
                Math.ceil(Math.random() * 100),
                1
                );

                items.push(item);

        }

        this.setState({
            items
        })
    }

    // child to parent communication - callback function
    // pass removeItem function as a props to CartList
    // Then pass removeItem from CartList to CartItem
    // CartItem shall call removeItem as call back
    removeItem = (id: number) => {
        // TODO calculate the result
        console.log('removeItem', id);

        const items = this.state.items.filter (item => item.id !== id);

        this.setState({
            // items: items
            items // sugar part/es6, expands to items: items
        })

    }

    updateItem = (id: number, qty: number) => {
        //TODO

        // clone of items [...items]
        const items = this.state.items.map ( item => {
            if (item.id != id) { // this id is not for update
                return item;
            }

            // clone of the object item
            return {...item, qty}
        })

        // this.setState({
        //     items
        // })
         
    }

    empty = () => {
        //TODO
        this.setState({
            // assign a new array
            items: []
        }) 
    }

    setFlag = () => {
        this.setState({
            flag: true
        })
    }
 
 

    render() {
        console.log('Cart Render');

        return (
            <div>
                <h2>Cart</h2>

              
                <button onClick={this.addItem}>
                    Add Item
                </button>

                <button onClick={this.empty}>
                    Empty Cart
                </button>


                <button onClick={this.setFlag}>
                    set Flag
                </button>

                <button onClick={this.bulkItems}>
                    bulkItems Insert 
                </button>
                
                {/* passing functions as props */}

                <CartList items={this.state.items}
                          removeItem={this.removeItem}
                          updateItem={this.updateItem}
                />

                <CartSummary amount={this.state.amount}
                             count={this.state.count} />
            </div>
        )
    }
}

export default Cart;