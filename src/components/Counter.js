import React from "react";

export default class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = { counter: 0 }
        this.diminuer = this.diminuer.bind(this);
        this.augmenter = this.augmenter.bind(this);
    }

    diminuer() {
        this.setState({ counter: this.state.counter - 1})
    }

    augmenter() {
        console.log(this);
        this.setState({ counter: this.state.counter + 1})
    }

    render() {
        return (
            <>
                <h2>Counter</h2>
                <button onClick={() => { this.diminuer() }}> Diminuer </button>
                <span style={{ padding: '5px'}}>{ this.state.counter }</span>
                <button onClick={this.augmenter}> Augmenter </button>
            </>
        )
    }
}