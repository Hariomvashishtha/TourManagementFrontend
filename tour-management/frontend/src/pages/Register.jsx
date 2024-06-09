import React from 'react';
import { Container, Row, Col, Form, Button,FormGroup } from 'reactstrap';
import {Link} from 'react-router-dom';
import '../styles/login.css';
import registerImage from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';
import { useState } from 'react';


const Register = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
    userName: undefined
  });
  const handleChange = (e) => {
   setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}));
  }
  const handleClick = async (e) => {
    e.preventDefault(); 
    console.log(credentials);
  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImage} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="text" placeholder="Username" required  id="userName" onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="email" placeholder="Email" required  id="email" onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder="Password" id="password" required onChange={handleChange} />
                  </FormGroup>
                  <Button className="btn secondary__btn auth__btn" type="submit" onClick={handleClick}>
                    Create Account
                  </Button>
                  
                </Form>
                <p>
                    Already  have an account? <Link to="/login">Login</Link>
                  </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register;