import React, { Component } from "react";
import "./NewProject.css";
import { Wrapper, Row, Col } from "../BootstrapGrid";
import {Input} from "../BootstrapGrid";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";


class NewProject extends Component {
    state = {
        projectname:""
    }
    handleInputChange=event=>{
        const {name, value} = event.target;
        this.setState({[name]:value});
    }
    handleFormSubmit=event=>{
        event.preventDefault();
        if(this.state.projectname){
            API.saveProject({projectname:this.state.projectname}).then(()=>{
                console.log("Project Created");
                this.setState({projectname:""});
            }).catch(err=>console.log(err));
        }
    }
    render() {
        if (!this.props.loggedIn) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <Wrapper>
                    <Row>
                        <Col>
                            <h3> Create New Project </h3>
                        </Col>
                    </Row>
                    <form>
                    <Row>
                        <Col>
                            <label>Project Name</label>
                            <Input value={this.state.projectname} name="projectname" onChange={this.handleInputChange}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button className="btn btn-success" onClick={this.handleFormSubmit}>Create Project</button>
                        </Col>
                    </Row>
                    </form>
                </Wrapper>
            </div>
        );
    }

}

export default NewProject;