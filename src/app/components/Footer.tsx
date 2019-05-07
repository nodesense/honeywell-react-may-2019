// Footer.tsx
import React from 'react';

interface FooterProps {
    companyName: string;
    year: number;
    pincode? : number; // ? optional
}
//ES6 styled arrow functions

const Footer = (props: FooterProps) => {
    // deconstruct
    const {companyName, year} = props;

    return (
        <div>
            <hr />
            <p>Copyrights @{year}, {companyName}</p>
        </div>
    )
}

export default Footer;