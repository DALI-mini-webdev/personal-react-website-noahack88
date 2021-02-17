import React, { Component } from 'react';
import firebase from '../firebase/index';
import './styles.css'

class ToDoPosting extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    deletePost = () => {

    }

    render() {
        return(
        <div className="todoPostStyle">
            <p>{this.props.title}</p>
            <p>{this.props.task}</p>
            <button onClick={this.deletePost}>Delete!</button>
        </div>
        )
    }
}

export default ToDoPosting;