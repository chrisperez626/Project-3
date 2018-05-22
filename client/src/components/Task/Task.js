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
        taskName: this.props.content
    }
    componentDidMount=()=>{
        API
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
        API.updateTask(this.props.id, {taskname: this.state.taskName, status: this.state.status, description: this.state.description})
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
                                <input type="text"/>
                                <Button>Submit</Button>
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