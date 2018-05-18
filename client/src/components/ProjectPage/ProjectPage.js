import React, { Component } from "react";
import TaskGroup from '../TaskGroup';
import Wrapper from "../BootstrapGrid/Wrapper";
import Col from '../BootstrapGrid/Col'
import Row from '../BootstrapGrid/Row'

class ProjectPage extends Component {

  render() {
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
