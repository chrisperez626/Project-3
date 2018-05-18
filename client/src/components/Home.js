import React from 'react';
import {Wrapper, Row, Col} from "./BootstrapGrid";
import Welcome from "../components/Welcome";

const styles = {
  header: {
    color: "white",
    borderStyle: "solid",
    borderWidth: "1px",
    textAlign: "center"
  }
}

export default ({loggedIn = false, user}) => {
  return (
    !loggedIn ? 
      <Wrapper>
        <Row>
          <Col offset={3}>
            <h1>Please Sign Up or Log In...</h1>
          </Col>
        </Row>
      </Wrapper>
      :
      <Wrapper>
        <Row>
          <Col>
          <h4 style={styles.header}>You are successfully logged in {user.firstname}!</h4>
          <Welcome/>
          </Col>
        </Row>
      </Wrapper>
  );
}