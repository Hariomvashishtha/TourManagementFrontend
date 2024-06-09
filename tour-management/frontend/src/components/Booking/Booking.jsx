import React from "react";
import {useState, useEffect} from "react";
import "./booking-css.css";
import {
  Form,
  FormGroup,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const Booking = ({ tour, avgRating }) => {
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const { price, reviews } = tour;
  const navigate=useNavigate();
  const service=10;
  

  const [credentials, setCredentials] = useState({
    userId : "01",
    fullName: "",
    userEmail: "",
    phone: "",
    bookAt: "",
    guestSize: "",
  });
  const totalAmount =Number(price) *Number(credentials.guestSize || 1) +Number(service);
  const handleClick = (e) => {
    e.preventDefault();
    console.log(credentials);
    navigate("/thank-you");
    
  };
  return (
    <div className="booking">
      <div className="p-0 m-0 booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span className=" tout__rating d-flex align-items-center">
          <i class="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup className="">
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="">
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="gap-3 d-flex align-items-center">
            <input
              type="date"
              placeholder="bookAt"
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Group Size"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="px-0 border-0">
            <h5 className="gap-1 d-flex align-items-center">
              ${price} <i class="ri-close-fill"></i> 1 person
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="px-0 border-0">
            <h5>
            Service Charge
            </h5>
            <span>${service}</span>
          </ListGroupItem>
          <ListGroupItem className="px-0 border-0 total">
            <h5>
            Total
            </h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="mt-4 btn primary__btn w-100" onClick={handleClick}>Book Now</Button>
      </div>
    </div>
  );
};

export default Booking;
