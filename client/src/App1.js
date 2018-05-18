import React, { Component } from "react";
import Nav from './components/Nav/Nav';
import TaskCard from './components/TaskCard';
import NewTask from './components/NewTask';
import Task from './components/Task';
import "./App.css";

class App extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <div className='container'>
          <div className='row'>
            <TaskCard 
              header='To-Do'
              onClick={this.newTask}
              id='1'>
                <NewTask/>
            </TaskCard>
            <TaskCard 
              header='Doing'
              onClick={this.newTask}
              id="2">
                <NewTask/>
            </TaskCard>
            <TaskCard 
              header='Done'
              onClick={this.newTask}
              id="3">
                <NewTask/>
                <Task/>

            </TaskCard>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
