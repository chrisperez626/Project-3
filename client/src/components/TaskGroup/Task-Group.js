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

    const formatDate = (date) => {
        if (date) {

            const dateArray = date.split(/\s*-\s*/);
            const day = dateArray[2].split(/\s*T\s*/);
            const newDate = dateArray[1] + "/" + day[0];
            return newDate
        }
    }

    return (
        <div>
            <div id={props.id} className='card mycard'>
                <header id={props.id} className=' card-header text-center chdr'>{props.header}</header>
                <div className='card-body'>
                    {!props.isNewTask ?
                        (
                            <div>
                                <div>
                                    <button onClick={() => newTask()}>Add new task +</button>
                                </div>
                                {props.tasks.slice(0).reverse().map(task => {
                                    
                                    if (props.header === task.status)

                                        

                                        return (
                                            <Task
                                                key={task.id}
                                                taskId={task.id}
                                                description={task}
                                                projectId={props.projectId}
                                                userId={props.user.id}
                                                loadTasks={props.loadTasks}
                                                newDate={formatDate(task.dueDate)}
                                                // tasks={this.state.divCount}
                                                />

    render() {
        return (
            <div>
                <div id={this.props.id} className='card mycard'>
                    <header id={this.props.id} className=' card-header text-center chdr'>{this.props.header}</header>
                    <div className='card-body'>
                        {!this.state.NewTask ?
                            (
                                <div>
                                    <div>
                                        <button onClick={() => this.newTask()}>Add new task +</button>
                                    </div>
                                    {this.state.divCount.slice(0).reverse().map(task => {
                                        if (this.props.header === task.status)
                                            return (
                                                <Task
                                                    key={task.id}
                                                    taskId={task.id}
                                                    description={task} />

                                            )
                                            
                                        }
                                        
                                    )}
                                </div>
                            )
                            :
                            (
                                <div>
                                    <form onSubmit={this.submitTask}>
                                        <textarea id='newTask' placeholder='Add new task here' onChange={this.handleInputChange}/>
                                        <br/>
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