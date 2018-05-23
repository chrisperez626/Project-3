import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import API from "../../utils/API";
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const styles = {
    body:{
        paddingTop:"100px"
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "10px",
        height: "100px",
        color:"black"
    },
    projectContent:{
        paddingTop:"200px"
    },
    project:{
        textAlign:"center"
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
            user:this.props.user,
            projects:[],
            tasks:[],
            show: false, 
            projectname:"",
            projectId:""
        };

        this.createToggle = this.createToggle.bind(this);
        this.updateToggle = this.updateToggle.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    
    componentDidMount() {
        this.loadTasks();
        this.loadProjects();
    }

    createToggle = () => {
        console.log("create Toggle");
        this.setState({
            createModal: !this.state.createModal
        });
    }

    updateToggle = (id, name) => {
        console.log("update toggle");
        this.setState({
            updateModal: !this.state.updateModal,
            projectId:id,
            projectname:name
        });
    }

    handleInputChange=event=>{
        const {name, value} = event.target;
        this.setState({[name]:value});
    }

    handleFormSubmit=event=> {
        event.preventDefault();
        if(this.state.projectname){
            console.log("UserId inside save project: ",this.state.user.id);
            const newProject={
                projectname:this.state.projectname,
                UserId:this.state.user.id
            };
            API.saveProject(newProject).then(()=>{
                console.log("Project Created");
                this.setState({projectname:""});
                this.loadProjects();
            }).catch(err=>console.log(err));
        }
    }

    handleFormUpdate =(event) => {
        event.preventDefault();
        const id = event.target.getAttribute("data-id");
        console.log("Project id: ", id);
        if(this.state.projectname){
            console.log("update project: ",this.state.projectname);
            const updatedProject={
                projectname:this.state.projectname,
            };
            API.updateProject(id,updatedProject).then(()=>{
                console.log("Project Updated");
                this.setState({projectname:""});
                this.loadProjects();
            }).catch(err=>console.log(err));
        }
    }

    loadProjects = () =>{
        API.getUserProject(this.state.user.id).then(projects =>{
            console.log("Projects: ",projects.data);
            this.setState({projects:projects.data});
        }).catch(err => console.log(err));
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

    testHandler = event => {
        console.log(event.target.getAttribute("data-id"))
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={this.state.redirectTo} />
        }
        return (
            <div className="container" style={styles.body}>
                <h2>Tasks</h2>
                {this.state.tasks.length ? (
                    <div style={styles.grid}>
                        {this.state.tasks.map(task => (
                            <div key={task.id}>
                            <div className="card" key={task.id}>
                                <img className="card-img-top" src={require("../../img/shared-task.jpg")} alt="Shared task"/>
                                <h4 className="card-block" style={styles.preProject} onClick={this.handleProject}>
                                    {task.taskname}
                                </h4>
                                <p style={styles.project}>Project: {task.Project.projectname}</p>
                            </div>
                            <div></div>
                            </div>
                        )
                        )}
                    </div>
                         ) : (
                            <div style={styles.grid}>
                                {/* <div className="card">
                                <img className="card-img-top" src={require("../../img/shared-task.jpg")} alt="Shared task"/>
                                <h4 className="card-block" style={styles.preProject} >
                                </h4>
                                </div> */}
                            </div>
                            )} 
                    <br/>
                <div style={styles.projectContent}><h4>Projects</h4></div>
                    {this.state.projects.map(project =>(
                        <div  key ={project.id}>
                        <div>
                        <p onClick={this.handleProject}>{project.projectname}</p> <span data-id={project.id} onClick={()=>this.updateToggle(project.id,project.projectname)}><i className="fas fa-edit" data-id={project.id} onClick={()=>this.updateToggle(project.id,project.projectname)}></i></span>    
                        </div>
                        <div>
                        <Modal isOpen={this.state.updateModal}>
                            <form onSubmit={this.handleFormUpdate} data-id={this.state.projectId} >
                                <ModalHeader>Update Project Name</ModalHeader>
                                <ModalBody>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <input type="text" name="projectname" value={this.state.projectname} onChange={this.handleInputChange} placeholder={this.state.projectname} className="form-control" />
                                        </div>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <input type="submit" value="Submit" color="success" className="btn btn-success"  />
                                    <Button color="danger" onClick={(event)=>this.updateToggle(project.id)}>Cancel</Button>
                                </ModalFooter>
                            </form>
                        </Modal>
                    </div>
                    </div>
                    ))}
                {/* <div style={styles.grid}>
                    <div className="card board-card" style={styles.cardWidth} onClick={this.toggle}> */}
                        <h4 className="card-block" onClick={this.createToggle}>
                            + Create New Project
                    </h4>
                    {/* </div>
                </div> */}
                
                <br />
                <div>
                    <Modal isOpen={this.state.createModal}>
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
                                <Button color="danger" onClick={this.createToggle}>Cancel</Button>
                            </ModalFooter>
                        </form>
                    </Modal>
                </div>
                
            </div>
            
        );
    }
}

export default Welcome;