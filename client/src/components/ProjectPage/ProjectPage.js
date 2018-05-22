import React, { Component } from "react";
import TaskGroup from '../TaskGroup';
import {Wrapper, Col, Row} from "../BootstrapGrid";
import { Redirect } from "react-router-dom";


class ProjectPage extends Component {

  render() {
    // if(!this.props.loggedIn){
    //   return <Redirect to="/" />
    // }
    return (
      <div>
        <Wrapper>
          <Row>
          <Col>
            <TaskGroup
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