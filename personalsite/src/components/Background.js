import React, { Component } from 'react';
import './Background.css'

class Background extends Component {
    constructor(props) {
        super(props);
        this.state={color:"aqua"};
    }

    changeColor = () => {
        this.setState({bcolor:"aquamarine"})
    }

    render () {
        return(
            <div>
                <button onClick={this.changeColor}>Click</button>
            </div>
        )
    }
}

export default Background;
