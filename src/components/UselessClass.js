import React from 'react';

export default class UselessClass extends React.Component {

    static defaultProps = { version: '1.0' }

    constructor(props) {
        super(props); // obligatoire
        this.bar = this.bar.bind(this);
    }

    foo() {
        console.log('foo()', this);
    }

    bar() {
        console.log('bar()', this);
    }

    // syntaxe experimentale
    baz = () => {
        console.log('baz()', this);
    }

    quux() {
        console.log('quux()', this);
    }

    render() {
        return (
            <div>
                <h3>This <small>(version: { this.props.version })</small></h3>

                <h4>No binding</h4>
                <button onClick={this.foo}>
                    Fonction foo()</button>

                <h4>Binding explicite</h4>
                <button onClick={this.bar}>
                    Fonction bar()</button>

                <h4>Champs de classe</h4>
                <button onClick={this.baz}>
                    Fonction baz()</button>

                <h4>Fonction fléchée</h4>
                <button onClick={() => this.quux()}>
                    Fonction quux()</button>
            </div>  
        );
    }

}