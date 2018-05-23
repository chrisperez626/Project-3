import React, {Component} from 'react';
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
        welcomePage: this.props.welcomePage
    }
    componentDidMount=()=>{
        console.log("TASKID: ", this.props.taskId);
        API.getTask(this.props.taskId)
        .then(res => {
            console.log(res);
            this.setState({
                taskName: res.data.taskname,
                status: res.data.status,
                modal: this.props.show || false
            });
        });
    }

    modalPopup = () =>{
        this.setState({modal: !this.state.modal})
    }

    toggle = () =>{
        this.setState({Dropdown: !this.state.Dropdown})
    }

    handleInputChange = event =>{
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    onSelect = event =>{
        this.setState({status: event.target.innerText})
    }

    onSubmit = event =>{
        API.updateTask(this.props.id, {taskName: this.state.taskName, status: this.state.status, description: this.state.description})
    }

    // showModal = () => {
    //     this.setState({show:true});
    // }

    render(){
        console.log("WELvbfghf", this.state.welcomePage)
        if(this.state.welcomePage){
            return(
                <div key={this.state.taskId}>
                    <div className="card" style={styles.cardStyle} key={this.state.taskId}>
                        <img className="card-img-top" src={require("../../img/shared-task.jpg")} alt="Shared task"/>
                        <h6 className="card-block" style={styles.preProject} onClick={this.modalPopup}>
                            {this.state.taskName}
                        </h6>
                        <p style={styles.project}>Project: {this.props.projectName}</p>
                    </div>
                    <TaskModal show={this.state.modal}
                               onSubmit={this.onSubmit}
                               taskName={this.state.taskName}
                               dropdown={this.Dropdown}
                               toggle={this.toggle}
                               status={this.state.status}
                               onSelect={this.onSelect}
                               handleInputChange={this.handleInputChange}
                               modalPopup={this.modalPopup} />
                </div>
            );
        }
        else{
            return(
                <div>
                    <a onClick={this.modalPopup}>
                        <div id={this.props.id} className="card">
                            <strong>{this.state.taskName}</strong>
                        </div>
                    </a>
                
                    <div>
                    <TaskModal show={this.state.modal}
                               onSubmit={this.onSubmit}
                               taskName={this.state.taskName}
                               dropdown={this.Dropdown}
                               toggle={this.toggle}
                               status={this.state.status}
                               onSelect={this.onSelect}
                               handleInputChange={this.handleInputChange}
                               modalPopup={this.modalPopup} />
                    </div>
               </div> 
            )
        }
    }
}

const TaskModal = ({show, onSubmit, taskName, dropdown, toggle, status, onSelect, handleInputChange, modalPopup}) => {
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
                    <textarea name="description" onChange={handleInputChange}/>
                    <br/>
                    <h4>Comments</h4>
                    <input type="text"/>
                    <Button>Submit</Button>
                    {}
                </ModalBody>
                <ModalFooter>
                    <Button type="submit">Submit</Button>
                </ModalFooter>
            </form>
        </Modal>
    );
}

export default Task