import React from "react";

export default class Color extends React.Component {

    constructor(props) {
        super(props);

        this.state = { color: 'transparent' }
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(e) {
        console.log(e);
        this.setState( { color: e.target.dataset.color } );
    }

    render() {
        return (
            <>
                <h2>Color</h2>
                <div style={{ marginBottom: '10px'}}>
                    {/*<button onClick={ () => { this.setState({ color: 'red' }) } }>
                        Rouge</button>
                    <button onClick={ () => { this.setState({ color: 'blue' }) } }>
                        Bleu</button>
                    <button onClick={ () => { this.setState({ color: 'limegreen' }) } }>
                        Vert</button> */}

                    <button onClick={ this.changeColor } data-color='red'>
                        Rouge</button>
                    <button onClick={ this.changeColor } data-color='blue'>
                        Bleu</button>
                    <button onClick={ this.changeColor } data-color='limegreen'>
                        Vert</button>
                </div>

                <div style={{
                    width: '100px',
                    height: '100px',
                    border: '1px solid #000',
                    backgroundColor: this.state.color,
                    borderRadius: '5px'
                }}></div>
            </>
        )
    }
}