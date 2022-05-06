import React from 'react';

export default class UselessButton extends React.Component {

    handleOpen() {
        alert('Le répertoire est ouvert')
    }

    render() {
        return (
            <button onDoubleClick={this.handleOpen}>
                Ouvrir ce répertoire</button>
        );
    }

}