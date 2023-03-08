import React, { Component } from "react";

class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this)
        // This code will happen if you do not bind:
        // Uncaught TypeError: Cannot read properties of undefined (reading 'setState')
    }
    increment() {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return (
            <div>
                <h1>The Count Is: {this.state.count}</h1>
                <button onClick={this.increment}>Add 1</button>
            </div>
        );
    }
}
export default CounterClass;
