// Header.tsx
import React from 'react';

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
            <p>Menu options</p>
            <hr />
        </div>
    )
}

export default Header;