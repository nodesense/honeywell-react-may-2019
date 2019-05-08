import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl';

interface AboutProps {

}

interface AboutState {
    name: string;
    unreadCount: number;
}

class About extends Component<AboutProps, AboutState> {
    constructor(props: AboutProps) {
        super(props);
        this.state = {
            name       : 'Eric',
            unreadCount: 1000,
        };
    }
 
    render() {
        const {name, unreadCount} = this.state;
 
        return (
            <p>
                <FormattedMessage
                    id="welcome"
                    defaultMessage={`Hello {name},   you have {unreadCount, number, formatNumber} {unreadCount, plural,
                      one {message}
                      other {messages}
                    }`}
                    values={{name: <b>{name}</b>, unreadCount}}
                />

                <FormattedNumber value={1000}/>

            </p>
        );
    }
}

export default About;
