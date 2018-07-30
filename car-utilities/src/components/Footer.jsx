import React, { Component } from 'react';
import Button from './Button';

class Footer extends Component {

    render() {
        return(
            <div class="bottom">
                <div className="col-sm-12">
                    <ul class="nav nav-pills">
                        <li role="presentation" class="active"><a href="#">Home</a></li>
                        <li role="presentation"><a href="#">Profile</a></li>
                        <li role="presentation"><a href="#">Messages</a></li>
                        <Button buttonText='Subscribe'></Button>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer