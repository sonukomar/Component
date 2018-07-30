import React, { Component } from 'react';

class Header extends Component {

    render() {
        return(
            <div>
                <ul class="nav nav-pills">
                        {
                            this.props.menu.map(menu => 
                                <li role="presentation" class="active"><a href="#">{ menu }</a></li>
                            )
                        }
                </ul>
            </div>
        )        
    }
}

export default Header