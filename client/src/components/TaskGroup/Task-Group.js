import React, { Component } from 'react';
import './Task-Group.css';
// import Task from '../Task';



class TaskGroup extends Component {

    state = {
        NewTask: false,
        divCount: []
    }

    newTask = () =>{
        this.setState({NewTask:true})
    }

    submitTask = () =>{
        this.setState({NewTask:false})

        
    }

    render() {
        return (
            <div className='col-lg-4'>
                <div id={this.props.id} className='card'>
                    <header className=' card-header text-center'>{this.props.header}</header>
                    <div className='card-body'>
                        {!this.state.NewTask ?
                    (
                        <div>
                            <button onClick={() => this.newTask()}>Add new task +</button>
                        </div>
                        )
                    :
                    (
                        <div>
                            <form onSubmit={() => this.submitTask()}>
                                <textarea id='newTask' placeholder='Add new task here'></textarea>
                                <br />
                                <button type='submit'>Add Task</button>
                            </form>
                        </div>
                        )
                    }
                    </div>
                </div>
            </div>
        )
    }

}

export default TaskGroup;