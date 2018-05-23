import React, { Component } from "react";
import {Route} from 'react-router-dom';
import TaskGroup from '../TaskGroup';
import Task from "../Task";
import {Wrapper, Col, Row} from "../BootstrapGrid";
import { Redirect } from "react-router-dom";


class ProjectPage extends Component {
  

  render() {
    console.log(this.props.projectId);
    if(!this.props.loggedIn){
      return <Redirect to="/" />
    }
    return (
      <div>
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
              header='Doing'
              id="2"/>
          </Col>
          <Col>
            <TaskGroup 
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