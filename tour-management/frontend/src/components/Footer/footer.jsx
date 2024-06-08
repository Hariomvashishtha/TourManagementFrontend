import React from "react";
import "./footer.css";
import { Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const quick_links01 = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];
const quick_links02 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const footer = () => {

  const year=new Date().getFullYear();

  return (
    <footer className="footer">
      <Row>
        <Col lg="3">
          <div className="logo">
            <img src={logo} alt=""></img>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
              magnam.
            </p>
            <div className="gap-4 social__links d-flex align-items-center">
              <span>
                <Link to="#">
                  <i class="ri-youtube-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-github-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="ri-linkedin-line"></i>
                </Link>
              </span>
            </div>
          </div>
        </Col>

        <Col lg="3">
          <div>
            <h5 className="quick__links-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick_links01.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0">
                  <Link className="discoverLink" to={item.path}>
                    {item.display}
                  </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
        </Col>
        <Col lg="3">
          <div>
            <h5 className="quick__links-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick_links02.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0">
                  <Link className="discoverLink" to={item.path}>
                    {item.display}
                  </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
        </Col>
        <Col lg="3">
          <div>
            <h5 className="quick__links-title">Contact Us</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="gap-3 border-0 ps-0 d-flex ">
                <h6 className="gap-2 mb-0 d-flex align-items-center">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  Address:
                </h6>
                <p className="mb-0 d-flex"> NIT KURUKSHETRA</p>
              </ListGroupItem>
              <ListGroupItem className="gap-3 border-0 ps-0 d-flex ">
                <h6 className="gap-2 mb-0 d-flex align-items-center">
                  <span>
                  <i class="ri-mail-line"></i>
                  </span>
                  Email:
                </h6>
                <p  className="mb-0 d-flex"> 12112211@nitkkr.ac.in</p>
              </ListGroupItem>
              <ListGroupItem className="gap-4 border-0 ps-0 d-flex ">
                <h6 className="gap-2 mb-0 d-flex align-items-center">
                  <span>
                  <i class="ri-phone-line"></i>
                  </span>
                  Phone:
                </h6>
                <p  className="mb-0 d-flex"> +91 8218754669</p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col className="pt-5 mt-4 text-center" lg="12">
          <p className="copyright">Copyright {year}, design and developed by Hariom Vashishtha. All rights reserved</p>
        </Col>
      </Row>
    </footer>
  );
};

export default footer;
