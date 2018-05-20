import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import API from "../../utils/API";
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const styles = {
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "10px",
        height: "100px"

    },
    preProject: {
        textAlign: "center",
        paddingTop: "25px"
    },
    cardWidth: {
        backgroundColor: "lightgrey",
        paddingTop: "25px",
        textAlign: "center"
    }
}

class Welcome extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            redirectTo: "",
            user:props.user,
            // projects: [],
            tasks:[],
            show: false, 
            projectname:""
        };

        this.toggle = this.toggle.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        console.log("User inside Welcome:", this.props.user);        
    }

    componentDidMount() {
        this.loadTasks();
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleInputChange=event=>{
        const {name, value} = event.target;
        this.setState({[name]:value});
    }

    handleFormSubmit=event=> {
        event.preventDefault();
        if(this.state.projectname){
            API.saveProject({projectname:this.state.projectname}).then(()=>{
                console.log("Project Created");
                this.setState({projectname:""});
            }).catch(err=>console.log(err));
        }
    }

    loadTasks = () => {
        API.getUserTask(this.state.user.id).then(tasks => {
            console.log("Tasks: ",tasks.data);
            this.setState({tasks:tasks.data});
        }).catch(err => console.log(err));
    }

    handleProject = () => {
        this.setState({ redirectTo: "/projectpage" });
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={this.state.redirectTo} />
        }
        return (
            <div className="container">
                <h2>Tasks</h2>
                {this.state.tasks.length ? (
                    <div className="grid" style={styles.grid}>
                        {this.state.tasks.map(task => (
                            <div className="card" key={task.id}>
                                <h3>Project: {task.Project.projectname}</h3>
                                <h4 className="card-block" style={styles.preProject} onClick={this.handleProject}>
                                    {task.taskname}
                                </h4>
                            </div>
                        ))}
                    </div>
                ) : (
                        <h3> No projects found</h3>
                    )}
                    <br/>
                <div style={styles.grid}>
                    {/* <div className="card ">
                    <div className="card-block currProject">
                        Current Projects
                    </div>
                </div> */}
                    <div className="card board-card" style={styles.cardWidth}>
                        <h4 className="card-block" onClick={this.toggle}>
                            Create New Projects
                    </h4>
                    </div>
                </div>
                <h2>Projects</h2>
                {/* {this.state.tasks.length ? (
                    <div className="grid" style={styles.grid}>
                        {this.state.tasks.map(task => (
                            <div className="card" key={task.id}>
                                <h4 className="card-block" style={styles.preProject}>
                                    {task.taskname}
                                </h4>
                            </div>
                        ))}
                    </div>
                ) : (
                        <h3> No Tasks found</h3>
                    )} */}
                <br />
                {/* <h2>Team</h2>
                <div style={styles.grid}>
                    <div className="card board-card">
                        <h4 className="card-block">
                            Create new Team
                    </h4>
                    </div>
                </div> */}
                <div>
                    <Modal isOpen={this.state.modal}>
                        <form onSubmit={this.handleFormSubmit}>
                            <ModalHeader>Project Name</ModalHeader>
                            <ModalBody>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <input type="text" name="projectname" value={this.state.projectname} onChange={this.handleInputChange} className="form-control" />
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <input type="submit" value="Submit" color="success" className="btn btn-success" />
                                <Button color="danger" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                        </form>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Welcome;