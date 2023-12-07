// Login.js
import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../redux/slices/authSlice";

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form as BootstrapForm,
} from "react-bootstrap";
import "../styles/Login.scss";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();

  const initialValues = {
    username: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-center align-items-center h-100">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">Login</Card.Title>
              <Formik
                initialValues={initialValues}
                validationSchema={LoginSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Username</BootstrapForm.Label>
                    <Field
                      type="text"
                      name="username"
                      as={BootstrapForm.Control}
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>

                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Password</BootstrapForm.Label>
                    <Field
                      type="password"
                      name="password"
                      as={BootstrapForm.Control}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>

                  <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit" block>
                      Login
                    </Button>
                  </div>
                </Form>
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
