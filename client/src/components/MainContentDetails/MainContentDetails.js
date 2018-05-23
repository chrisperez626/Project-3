import React from 'react';
import "./MainContentDetails.css";
import { Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';




const MainContentDetails = () => {
    return (
  
      <div className="container">
        <div className="row">
          <div className="col-12 hdrcol">
          <div className="contentheader">
              <h1>The Bootcamp Project Manager helps you manager all phases of your coding project from your "idea" to your final presentation.</h1>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>


        <div className="row contentrow">
        <div className="grid">
          <div className="col4 imgcol">
            <Card>
              <CardImage className="contentimg" src={require("../../img/whiteboard.jpg")}  /> 
                <CardBody>
                  <CardTitle>White Board</CardTitle>
                  <CardText>Use the white board to develop your team's ideas and design your project</CardText>
                </CardBody>
            </Card>
          </div>

          <div className="col4 imgcol">
            <Card>
              <CardImage className="contentimg" src={require("../../img/logos.jpg")}  /> 
                <CardBody>
                  <CardTitle>Manage You Project</CardTitle>
                  <CardText>Manage all aspects of your project by adding team members, assigning tasks, etc. </CardText>
                </CardBody>
            </Card>
          </div>

          <div className="col4 imgcol">
            <Card>
              <CardImage className="contentimg" src={require("../../img/speech.jpg")}  /> 
                <CardBody>
                  <CardTitle>Presentation</CardTitle>
                  <CardText>Learn all the tricks to give your project an outstanding presentation</CardText>
                </CardBody>
            </Card>
          </div>

          </div>
          </div>
      </div>
         
    )
}

export default MainContentDetails;


