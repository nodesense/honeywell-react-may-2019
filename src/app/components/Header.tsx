// Header.tsx
import React from 'react';
import {NavLink} from 'react-router-dom';

import {inject, observer} from 'mobx-react';
import { CounterState } from '../state/CounterState';

interface HeaderProps {
    title: string,
    counterState?: CounterState;
};


// ES5 styled function
// create and return virtual dom
// react calls this function
// props are passed as function arg to functional component

function Header(props: HeaderProps) {
    return (
        <div>
            <h2>{props.title}</h2>
            
             <NavLink to="/" 
                     className="button" 
                     exact
                      activeClassName="success"  > Home </NavLink>
             <NavLink to="/products" 
                      className="button"
                      activeClassName="success" > Products </NavLink>
             <NavLink to="/cart" className="button"
                      activeClassName="success" > Cart </NavLink>
             <NavLink to="/checkout" className="button"
                      activeClassName="success"  > Checkout </NavLink>

            
            <NavLink to="/counter" className="button"
                      activeClassName="success"  > Counter </NavLink>

            
            <NavLink to="/mobx-counter" className="button"
                      activeClassName="success"  > Mobx Counter </NavLink>

                      
             <NavLink to="/login" className="button"
                      activeClassName="success"  > Login </NavLink>

             <span> {props.counterState!.counter} </span>
            <hr />
        </div>
    )
}

// create wrapper component and export component
export default inject('counterState') (observer(Header));
// export default Header;

///  const injectorFunc = inject('counterState')
// const obserserFuncComp = injectorFunc(observer(Header))
// export default obserserFuncComp