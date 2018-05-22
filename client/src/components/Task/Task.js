import React, {Component} from 'react';
import './Task.css';

class Task extends Component{
    state = {

    }

    render(){
        return(
            <div id={this.props.id} className="card">
                <strong>{this.props.content}</strong>
            </div>
        )
    }
}
export default Task