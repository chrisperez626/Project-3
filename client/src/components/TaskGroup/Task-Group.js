import React, { Component } from 'react';
import './Task-Group.css';
import API from '../../utils/API';
import Task from '../Task';



const TaskGroup = props => {

    const newTask = () => {
        props.newTask(props.id)
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
                                    const dateArray = task.dueDate.split(/\s*-\s*/);
                                    console.log(dateArray)
                                    const day = dateArray[2].split(/\s*T\s*/);
                                    console.log(day)
                                    const newDate = dateArray[1] + "-" + day[0];
                                    console.log(newDate)

                                    if (props.header === task.status)

                                        return (
                                            <Task
                                                key={task.id}
                                                taskId={task.id}
                                                description={task}
                                                projectId={props.projectId}
                                                userId={props.user.id}
                                                loadTasks={props.loadTasks}
                                                newDate={newDate}
                                                // tasks={this.state.divCount}
                                                />

                                        )
                                        
                                    }
                                    
                                )}
                            </div>
                        )
                        :
                        (
                            <div>
                                <form onSubmit={(event) => props.submitTask(event, props.id)}>
                                    <textarea name={`newTask${props.id}Name`} value={props.value} placeholder='Add new task here' onChange={props.handleInputChange}/>
                                    <br/>
                                    <button type='submit'>Add Task</button>
                                    <button onClick={newTask}>Cancel</button>
                                </form>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default TaskGroup;