// Header.tsx
import React from 'react';
import {NavLink} from 'react-router-dom';

interface HeaderProps {
    title: string
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
                      
             <NavLink to="/login" className="button"
                      activeClassName="success"  > Login </NavLink>

            <hr />
        </div>
    )
}

export default Header;