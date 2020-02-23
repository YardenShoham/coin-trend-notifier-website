import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
const styleMargin = "m-3";

const LoginForm = () => {
  return (
    <React.Fragment>
      <Form>
        <Form.Group controlId="formLogin">
          <Form.Label>Username</Form.Label>
          <Form.Control placeholder="Username/Email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        {/*need to add functionality for next 3 buttons: */}
        <Container>
          <Row className="justify-content-md-center">
            <Col md="3" style={{ textAlign: "center" }} className={styleMargin}>
              <Button
                variant="primary"
                size="lg"
                active
                type="submit"
                style={{ position: "relative", margin: "auto" }}
              >
                Login
              </Button>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col
              md={4}
              xs={10}
              style={{ textAlign: "center" }}
              className={styleMargin}
            >
              <a>Forgotten your password?</a>
            </Col>
            <Col
              md={4}
              xs={10}
              style={{ textAlign: "center" }}
              className={styleMargin}
            >
              <a>Click here for Signup</a>
            </Col>
          </Row>
        </Container>
      </Form>
    </React.Fragment>
  );
};

export default LoginForm;
