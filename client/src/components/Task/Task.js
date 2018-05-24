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
        welcomePage: this.props.welcomePage,
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

    // showModal = () => {
    //     this.setState({show:true});
    // }

    render(){
        console.log("WELvbfghf", this.state.welcomePage)
        if(this.state.welcomePage){
            return(
                <div key={this.state.taskId}>
                    <div className="card" style={styles.cardStyle} key={this.state.taskId} onClick={this.modalPopup}>
                        <img className="card-img-top" src={require("../../img/shared-task.jpg")} alt="Shared task"/>
                        <h6 className="card-block" style={styles.preProject}>
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
                {/* </a>
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
                </div> */}
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