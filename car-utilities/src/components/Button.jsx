import React, { Component } from 'react';

class Button extends Component {

    render () {
        return (
            <p><a class="btn btn-primary btn-lg" href="#" role="button">{this.props.buttonText}</a></p>
        )
    }
}


export default Button