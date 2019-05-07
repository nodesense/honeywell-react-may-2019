// Home.tsx
import React from 'react';
import Counter from './Counter';

interface HomeProps {
}

interface HomeState {
    show: boolean;
}

class Home extends React.Component<HomeProps, HomeState> {
    counter!: Counter;

    constructor(props: HomeProps) {
        super(props);
        // initialize default state
        this.state = {
            show: true
        }
    }

    

    toggle = () => {
        this.setState({
            show: !this.state.show
        })
    }
    // inside JSX, we cannot write statements, if, else, switch, for, etc
    // but Expressions are allowed inside JSX, ?, && ||, + < >
    render() {
        console.log('Home render called');
        return (
            <div>
                <h2>Home</h2>
                
                {this.state.show && <p> Show is true</p>}
                
                {this.state.show? <p>Show on</p>
                                : <p>Show off</p>
                }

                {this.state.show && <Counter startValue={10} 
                                      ref={ (counter:Counter) => this.counter = counter } /> }

                <button onClick={this.toggle}>
                    {this.state.show? 'Hide': 'Show'}
                </button>
            </div>
        )
    }


    componentDidMount() {
        console.log("Counter instance ", this.counter);
         
        console.log("child component state ", this.counter.state);
    }
}

export default Home;