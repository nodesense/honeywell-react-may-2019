// App.tsx
import React from 'react'; // node_modules
import {IntlProvider, FormattedNumber, defineMessages} from 'react-intl';


// Alias by default
// JSX wants the name should start with capital case
import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter';
import Home from './components/Home';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';
import MobxCounter from './components/MobxCounter';
import ProductList from './components/ProductList';
import About from './components/About';
import MobxCart from './components/MobxCart';

import {BrowserRouter as Router,
        Route, 
        Switch, 
        Redirect} from 'react-router-dom';


const messages = defineMessages({
    greeting: {
        id: 'welcome',
        description: 'Message to greet the user.',
        defaultMessage: 'Hello, {name}!',
    },
});

// Class component
// React create an instance for class component
class App extends React.Component {
    // react keyword
    // create and return virtual dom when called
    // called by react automatically
    // Virtual dom is immutable, once created, cannot be updated
    // TSX- TypeScript + XML ==> converted to JS Code
    render() {
        return (
            <Router>
            <IntlProvider locale="en-us" messages={messages}>
                <div>
                <p>Welcome back!! {2018 + 1}</p>

                <About />
                
                {/* TSX Comment    */}
                {/* composition of components 
                    App is parent component
                    Header is child component

                    Parent can send data to child - Properties/props
                */}
                <Header title="Product App"  />
 
                {/* switch picks first match */}

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path='/cart' component={Cart} />
                    <Route path='/checkout' component={Checkout} />

                    <Route path='/mobx-counter' component={MobxCounter} />

                    <Route path='/mobx-cart' component={MobxCart} />
                    

                    <Route path='/products' component={ProductList} />


                    <Route path='/counter' render={ () => (
                            <Counter startValue={10}  />
                    ) }  />
                    
                    <Route path='*' component={NotFound} />
                </Switch>

                <Footer companyName='Honeywell' year={2019} />
 
            </div>
            </IntlProvider>
            </Router>

        );
    }
}

// can be imported into any file
export default App;