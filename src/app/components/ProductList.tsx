// ProductList.tsx
import React from 'react';
import {inject, observer} from 'mobx-react';
import { ProductState } from '../state/ProductState';

interface ProductListProps {
    productState: ProductState;
}

@inject('productState', 'counterState')
@observer
class ProductList extends React.Component<ProductListProps> {

    componentDidMount() {
        // make api call and get the list of products
        this.props.productState.fetchProducts();
    }

    render() {

        if ( this.props.productState.loading) {
            return (
                <React.Fragment>
                    <h2>Product is loading..</h2>
                    <p>Wait till it is loaded</p>
                </React.Fragment>
            )
        }

         
        return (
            <div>
                <h2>Product List</h2>

                <ul>
                    {
                        this.props.productState.products.map ( product => (
                            <li key={product.id}>
                                {product.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default ProductList;