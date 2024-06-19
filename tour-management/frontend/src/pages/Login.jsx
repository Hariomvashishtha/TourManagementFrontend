import React from "react";
import { Container, Row, Col, Form, Button, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";
import loginImage from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";
import { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(credentials);
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" sm="12" md="10" className="m-auto">
            <div className="login__container d-flex flex-column flex-lg-row justify-content-between">
              <div className="mx-auto login__img d-flex">
                <img src={loginImage} alt="" />
              </div>

              <div className="login__form sm:w-full md:w-full lg:w-2/5 " sm="12" md="10">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                    onClick={handleClick}
                  >
                    Login
                  </Button>
                </Form>
                <p>
                  Don't have an account? <Link to="/signup">Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
