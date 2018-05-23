import React, {Component} from 'react';
import './Task.css';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap";
import API from '../../utils/API'

class Task extends Component{
    state = {
        modal: false,
        Dropdown: false,
        status: this.props.status,
        comments:[],
        description:this.props.description,
        taskName: this.props.content,
        comment: "",
        Users: [],
        userId: ""
    }
    getComments = () => {
        API.getTaskComments(this.props.id)
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
        API.updateTask(this.props.id, {taskname: this.state.taskName, status: this.state.status, description: this.state.description, UserId: this.state.userId})
    }

    onClickSubmit = event =>{
        event.preventDefault()
        API.saveComment({comment: this.state.comment, TaskId: this.props.id})
        .then(res=>this.getComments())
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <a onClick={this.modalPopup}>
                    <div id={this.props.id} className="card">
                        <strong>{this.props.content}</strong>
                    </div>
                </a>
                <div>
                    <Modal isOpen={this.state.modal}>
                        <form onSubmit={this.onSubmit}>
                            <ModalHeader>
                                {this.props.content}
                                <Button id="x-button"color="danger" onClick={this.modalPopup}>X</Button>
                            </ModalHeader>
                            <ModalBody>
                                <h2>Update Status</h2>
                                <Dropdown isOpen={this.state.Dropdown} toggle={this.toggle}>
                                    <DropdownToggle caret>
                                        {this.state.status}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem onClick={this.onSelect} value="To-Do">To-Do</DropdownItem>
                                        <DropdownItem onClick={this.onSelect} value="Doing">Doing</DropdownItem>
                                        <DropdownItem onClick={this.onSelect} value="Done">Done</DropdownItem>
                                        <DropdownItem onClick={this.onSelect} value="Remove">Remove from Project</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <br/>
                                <h3 >Update Task Name</h3>
                                <input name="taskName" onChange={this.handleInputChange} type="text" defaultValue={this.props.content}/>
                                <br/>
                                <h3>Description</h3>
                                <div className="card text-center"><h5>{this.props.description}</h5></div>
                                <textarea placeholder="Change description here" name="description" onChange={this.handleInputChange}/>
                                <br/>
                                <h4>Comments</h4>
                                {this.state.comments.map(comment =>{
                                    return(
                                        <div className="card">{comment.comment}</div>
                                    )
                                })}
                                <input name="comment" onChange={this.handleInputChange} type="text"/>
                                <br/>
                                <br/>
                                <Button type="submit" onClick={this.onClickSubmit}>Submit</Button>
                                <br/>
                                <h3>Assign Task</h3>
                                <select placeholder="mook" onChange={this.handleInputChange} name="userId" className="dropdown">
                                    <option selected='selected'>Choose User</option>
                                    {this.state.Users.map(user => {
                                        return(
                                            <option value={user.id}>{user.firstname}</option>
                                        )
                                    })}
                                </select>
                            </ModalBody>
                            <ModalFooter>
                                <Button type="submit">Submit</Button>
                            </ModalFooter>
                        </form>
                    </Modal>
                </div>
           </div> 
        )
    }
}
export default Task