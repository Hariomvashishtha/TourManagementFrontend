/* eslint-disable no-unused-vars */
import React, { useEffect ,useContext} from "react";
import {  Row, Button, Container } from "reactstrap";
import { NavLink, Link,useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useRef } from "react";
import './header.css';
import { AuthContext } from "../../context/AuthContext";
const nav_links = [
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
const Header = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
 // debugger;

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
    window.location.reload();
  }
  const stikyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    })
  }
  useEffect(() => {
    stikyHeader();
    window.removeEventListener("scroll", stikyHeader);
  }, [])
  return (
    <>
      <header className="header" ref={headerRef}>
        <Container>
          <Row>
            <div className="nav__wrapper d-flex align-items-center justify-content-between">
              {/* logo start  */}
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>

              {/* // menu start  */}
              <div className="navigation">
                <ul className="gap-5 menu d-flex align-itens-center">
                  {nav_links.map((item, index) => {
                    return (
                      <li className="nav__item" key={index}>
                        <NavLink
                          to={item.path}
                          className={(navClass) =>
                            navClass.isActive ? 'active_link' : ''
                          }
                        >
                          {item.display}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="gap-4 nav__right d-flex align-items-center">
                <div className="gap-4 nav__btns d-flex align-items-center">
                  {user ? (
                    <>
                    <h5 className="mb-0">{user.user.username || user.email}</h5>
                  
                    <Button
                      className="btn btn-dark"
                      onClick={logout}
                    >
                      Logout
                    </Button>
                    </>
                    
                  ) : (
                    <>
                     <Button
                    className="btn secondary__btn"
                  >
                    <Link to="/login" className="font-bold text-black" style={{  textDecoration: "none" }}>Login</Link>
                  </Button>
                  <Button
                    className="btn primary__btn"
                  >
                    <Link
                      to="/signup"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      register
                    </Link>
                  </Button>
                    </>
                  )}
                 
                </div>
                <span className="mobile_menu">
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
