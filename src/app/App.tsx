// App.tsx
import React from 'react'; // node_modules


// Alias by default
// JSX wants the name should start with capital case
import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter';

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
            <div>
                <p>Welcome back!! {2018 + 1}</p>
                {/* TSX Comment    */}
                {/* composition of components 
                    App is parent component
                    Header is child component

                    Parent can send data to child - Properties/props
                */}
                <Header title="Product App"  />

                <Counter startValue={0} />

                <Counter startValue={100} />

                <Footer companyName='Honeywell' year={2019} />
 
            </div>
        );
    }
}

// can be imported into any file
export default App;