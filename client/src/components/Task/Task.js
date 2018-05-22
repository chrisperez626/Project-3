import React, {Component} from 'react';
import './Task.css';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap";

class Task extends Component{
    state = {
        modal: false,
        Dropdown: false
    }

    modalPopup = () =>{
        this.setState({modal: !this.state.modal})
    }

    toggle = () =>{
        this.setState({Dropdown: !this.state.Dropdown})
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
                        <form>
                            <ModalHeader>
                                {this.props.content}
                                <Button id="x-button"color="danger" onClick={this.modalPopup}>X</Button>
                            </ModalHeader>
                            <ModalBody>
                                <h2>Update Status</h2>
                                <Dropdown isOpen={this.state.Dropdown} toggle={this.toggle}>
                                    <DropdownToggle caret>
                                        {this.props.status}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>To Do</DropdownItem>
                                        <DropdownItem>Doing</DropdownItem>
                                        <DropdownItem>Done</DropdownItem>
                                        <DropdownItem>Remove from Project</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <br/>
                                <h3>Update Task Name</h3>
                                <input type="text" defaultValue={this.props.content}/>
                                <h3></h3>
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