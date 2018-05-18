import React, {Component} from 'react';
import './Task-Card.css'



class TaskCard extends Component {

    render() {
        return (
            <div className='col-lg-4'>
                <div id={this.props.id}className='card'>
                    <header className=' card-header text-center'>{this.props.header}</header>
                    <div className='card-body'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
    
}

export default TaskCard;