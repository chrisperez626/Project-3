import React from 'react';
import './New-Task.css';

class NewTask extends React.Component {
    state = {
        NewTask: false
    }

    newTask = () =>{
        this.setState({NewTask:true})
    }

    submitTask = () =>{
        

        this.setState({NewTask:false})
        
        
    }

    render(){
        if(!this.state.NewTask){
            return(
                <div>
                    <button onClick={()=> this.newTask()}>Add new task +</button>
                </div>
            )
        }
        return(
            <div>
                <form  onSubmit={()=>this.submitTask()}>
                    <textarea placeholder='Add new task here'></textarea>
                    <button type='submit'>Add Task</button>
                </form>
            </div>
        )
    }
    
}

export default NewTask;