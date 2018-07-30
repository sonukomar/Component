import React, { Component } from 'react';
import Button from '../../components/Button';

class Jumbotron extends Component {

    render() {
        return (
            <div>
                <div class="jumbotron">
                    <h1>{this.props.jumbotronContent.title}</h1>
                    <p>{this.props.jumbotronContent.content}</p>
                    <Button buttonText={this.props.jumbotronContent.buttonText}></Button>
                    </div>
            </div>
        )
    }
}


export default Jumbotron 