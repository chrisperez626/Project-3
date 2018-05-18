import React, {Component} from "react";
import "./Project.css";
import {Wrapper,Row,Col} from "../BootstrapGrid";

class NewProject extends Component {
    state={

    }
    render(){
        return(
            <div>
                <Wrapper>
                    <Row>
                        <Col>
                        <h3> Create New Project </h3>
                        </Col>
                    </Row>
                </Wrapper>
            </div>
        );
    }

}

export default NewProject;