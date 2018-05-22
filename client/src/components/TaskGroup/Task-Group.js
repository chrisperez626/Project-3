import React, { Component } from 'react';
import './Task-Group.css';
import API from '../../utils/API';
import Task from '../Task';



class TaskGroup extends Component {

    state = {
        NewTask: false,
        divCount: [],
        taskName: ""
    }

    componentDidMount = () =>{
        API.getAllTask()
        .then(res =>{
            this.setState({divCount: res.data})
        }).catch(err =>{
            console.log(err)
        })
    }

    newTask = () =>{
        this.setState({NewTask:true})
        console.log(this)
        
    }

    submitTask = event =>{
        event.preventDefault()
        this.setState({NewTask:false})
        API.saveTask({taskname: this.state.taskName, status: this.props.header, UserId: "1", ProjectId:'1'}).then(function(data, err){
            if (err) throw err;
        })
        API.getAllTask()
        .then(res =>{
            this.setState({divCount: res.data})
        }).catch(err =>{
            console.log(err)
        })

    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({taskName: value});

    }

    render() {
        return (
            <div>
                <div id={this.props.id} className='card'>
                    <header id={this.props.id}className=' card-header text-center'>{this.props.header}</header>
                    <div className='card-body'>
                        {!this.state.NewTask ?
                    (   
                        <div>
                            <div>
                                <button onClick={() => this.newTask()}>Add new task +</button>
                            </div>
                            {this.state.divCount.map(task=>{
                                if(this.props.header === task.status)
                                return (
                                    <Task
                                    key={task.id}
                                    id={task.id}
                                    content={task.taskname}
                                    status={task.status}/>
                                )
                            })}
                        </div>
                        )
                    :
                    (
                        <div>
                            <form onSubmit={this.submitTask}>
                                <textarea id='newTask' placeholder='Add new task here' onChange={this.handleInputChange} ></textarea>
                                <br />
                                <button type='submit'>Add Task</button>
                                <button onClick={this.newTask}>Cancel</button>
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