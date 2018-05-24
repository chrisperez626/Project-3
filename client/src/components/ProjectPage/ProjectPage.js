import React, { Component } from "react";
import TaskGroup from '../TaskGroup';
import {Wrapper, Col, Row} from "../BootstrapGrid";
import { Redirect } from "react-router-dom"
import API from "../../utils/API";



class ProjectPage extends Component {
  
  state ={
    projectname:""
  }

  componentDidMount(){
    this.loadname();
  }

  loadname =() =>{
    API.getProject(this.props.projectId).then(res=>{
      this.setState({projectname:res.data.projectname});
    }).catch(err=>console.log(err));
  }

  render() {
    if(!this.props.loggedIn){
      return <Redirect to="/" />
    }
    
    return (
      <div>
        <h4> <strong>Project:{this.state.projectname}</strong></h4>
        <Wrapper>
          <Row>
          <Col>
            <TaskGroup
              projectId = {this.props.projectId}
              user = {this.props.user}
              header='To-Do'
              id='1'/>              
          </Col>
          <Col>
            <TaskGroup 
              projectId = {this.props.projectId}
              user = {this.props.user}
              header='Doing'
              id="2"/>
          </Col>
          <Col>
            <TaskGroup 
              projectId = {this.props.projectId}
              user = {this.props.user}
              header='Done'
              id="3"/>
          </Col>
          </Row>
        </Wrapper>    
      </div>
    )
  }

}

export default ProjectPage;