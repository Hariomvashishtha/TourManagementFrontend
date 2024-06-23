import React from 'react';
import { Container, Row, Col, Form, Button,FormGroup } from 'reactstrap';
import {Link , useNavigate} from 'react-router-dom';
import '../styles/login.css';
import registerImage from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/Config';


const Register = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
    userName: undefined
  });

  const {dispatch} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
   setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}));
  }
  const handleClick = async (e) => {
    //debugger;
    e.preventDefault(); 
    console.log(credentials);
    try
    {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      if(!res.ok) alert(result.message);
      else{
        dispatch({type: "REGISTER_SUCCESS", payload: result.user});
        navigate("/login");
      }
    }
    catch(err){
      console.log(err);
      alert("Something went wrong " + err.message);
    }
  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8"  sm="12" md="10" className="m-auto">
            <div className="flex-column login__container d-flex flex-lg-row justify-content-between">
              <div className="mx-auto login__img d-flex">
                <img src={registerImage} alt="" />
              </div>

              <div className="login__form sm:w-full md:w-full lg:w-2/5 " sm="12" md="10">
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