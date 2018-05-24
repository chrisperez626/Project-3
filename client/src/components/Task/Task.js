import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Task.css';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap";
import API from '../../utils/API'

const styles = {
    body:{
        // paddingTop:"100px"
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "10px",
        height: "50px",
        color:"black"
    },
    projectContent:{
        paddingTop:"200px"
    },
    project:{
        textAlign:"center",
        fontSize:"16px"
    },
    preProject: {
        textAlign: "center",
        paddingTop: "25px"
    },
    cardWidth: {
        backgroundColor: "lightgrey",
        paddingTop: "25px",
        textAlign: "center"
    },
    cardStyle:{
        height:"250px",
        width:"250px"
    },
    projectLbl:{
        paddingRight:"10px"
    }
}

class Task extends Component{
    state = {
        taskId: this.props.taskId,
        modal: false,
        Dropdown: false,
        status: "",
        comments:[],
        description:"",
        taskName: "",
        welcomePage: this.props.welcomePage,
        comment: "",
        Users: [],
        userId: this.props.userId,
        loadTasks: this.props.loadTasks,
        dueDate: "2018-05-31"
    }
    formatDueDate = () => {
        const newDate = this.state.dueDate.split(/\s*-\s*/)
        const dateFormat = newDate[1] + "-" + newDate[2];
        console.log(dateFormat)
    }

    getComments = () => {
        API.getTaskComments(this.props.taskId)
        .then(res=>{
            this.setState({comments: res.data})
        })
        .catch(err => console.log(err))
    }

    getUsers = () => {
        API.getAllUsers()
        .then(res => this.setState({Users: res.data}))
        .catch(err => console.log(err))
    }
    
    componentDidMount=()=>{
        API.getTask(this.props.taskId)
        .then(res => {
            this.setState({
                description: res.data.description,
                taskName: res.data.taskname,
                status: res.data.status,
                modal: this.props.show || false
            });
        });
        this.getComments();
        this.getUsers();

    }

    modalPopup = () =>{
        this.setState({modal: !this.state.modal})
    }

    toggle = () =>{
        this.setState({Dropdown: !this.state.Dropdown})
    }

    handleInputChange = event =>{
        event.preventDefault()
        const {name, value} = event.target
        this.setState({[name]: value}) 
    }

    onSelect = event =>{
        this.setState({status: event.target.innerText})
    }

    onSubmit = event =>{
        event.preventDefault()
        API.updateTask(this.props.taskId, {taskname: this.state.taskName, status: this.state.status, dueDate: this.state.dueDate,description: this.state.description, UserId: this.state.userId, ProjectId: this.props.projectId})
        .then(()=> {
            this.props.loadTasks()
        })
        .catch(err => console.log(err))
        this.setState({modal: !this.state.modal})
        // this.props.loadTasks()
    }

    onClickSubmit = event =>{
        event.preventDefault()
        API.saveComment({comment: this.state.comment, TaskId: this.props.taskId})
        .then(res=>this.getComments())
        .catch(err => console.log(err))
        this.setState({welcomePage: false})
    }


    render(){
        if(this.state.welcomePage){
            return(
                <div key={this.state.taskId}>
                    <div className="card" style={styles.cardStyle} key={this.state.taskId}>
                        <img className="card-img-top" src={require("../../img/shared-task.jpg")} alt="Shared task" />
                        <h6 className="card-block" style={styles.preProject} onClick={this.modalPopup}>
                            {this.state.taskName}
                        </h6>
                        <p style={styles.project}>Project: {this.props.projectName}</p>
                    </div>

                    <TaskModal show={this.state.modal}
                        onSubmit={this.onSubmit}
                        taskName={this.state.taskName}
                        dropdown={this.state.Dropdown}
                        toggle={this.toggle}
                        status={this.state.status}
                        onSelect={this.onSelect}
                        handleInputChange={this.handleInputChange}
                        modalPopup={this.modalPopup}
                        comments={this.state.comments}
                        Users={this.state.Users}
                        description={this.state.description}
                        onClickSubmit={this.onClickSubmit} />



                </div>
            );
        }
        else{
            return(
                <div>
                    <a onClick={this.modalPopup}>
                        <div id={this.props.id} className="card">
                            <strong>{this.state.taskName}</strong>
                            <p>{this.props.newDate}</p>
                        </div>
                    </a>
                
                    <div>
                    <TaskModal show={this.state.modal}
                               onSubmit={this.onSubmit}
                               taskName={this.state.taskName}
                               dropdown={this.state.Dropdown}
                               toggle={this.toggle}
                               status={this.state.status}
                               onSelect={this.onSelect}
                               handleInputChange={this.handleInputChange}
                               modalPopup={this.modalPopup}
                               comments={this.state.comments}
                               Users={this.state.Users}
                               description={this.state.description}
                               onClickSubmit={this.onClickSubmit} />
                    </div>
               </div> 
            )
        }
    }
}

const TaskModal = ({show, onSubmit, taskName, dropdown, toggle, status, onSelect, handleInputChange, modalPopup, comments, Users, description, onClickSubmit}) => {
    return (
        <Modal isOpen={show}>
            <form onSubmit={onSubmit}>
                <ModalHeader>
                    {taskName}
                    <Button id="x-button"color="danger" onClick={modalPopup}>X</Button>
                </ModalHeader>
                <ModalBody>
                    <h2>Update Status</h2>
                    <Dropdown isOpen={dropdown} toggle={toggle}>
                        <DropdownToggle caret>
                            {status}   
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={onSelect} value="To Do">To Do</DropdownItem>
                            <DropdownItem onClick={onSelect} value="Doing">Doing</DropdownItem>
                            <DropdownItem onClick={onSelect} value="Done">Done</DropdownItem>
                            <DropdownItem onClick={onSelect} value="Remove">Remove from Project</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <br/>
                    <h3 >Update Task Name</h3>
                    <input name="taskName" onChange={handleInputChange} type="text" defaultValue={taskName}/>
                    <br/>
                    <h3>Description</h3>
                    <div className='card text-center'><strong>{description}</strong></div>
                    <textarea name="description" onChange={handleInputChange}/>
                    <br/>
                    <h4>Comments</h4>

                    {comments.map(comment =>{
                        return (
                            <div className="card">{comment.comment}</div>
                        )
                        
                    })}
                    <input name="comment" onChange={handleInputChange} type="text" />
                    <br />
                    <br />
                    <Button type="submit" onClick={onClickSubmit}>Submit</Button>
                    <br />
                    <br />
                    <h3>Assign Task</h3>
                    <select  onChange={handleInputChange} name="userId" className="dropdown">
                        <option selected='selected'>Choose User</option>
                        {Users.map(user => {
                            return (
                                <option value={user.id}>{user.firstname}</option>
                            )
                        })}
                    </select>
                    <br/>
                    <br />
                    <div>Due Date:</div>
                    <h3>Due Date</h3>
                    <input onChange={handleInputChange} name="dueDate" type="date"/>
                    
                </ModalBody>
                <ModalFooter>
                    <Button type="submit">Submit</Button>
                </ModalFooter>
            </form>
        </Modal>
    );
}

export default Task