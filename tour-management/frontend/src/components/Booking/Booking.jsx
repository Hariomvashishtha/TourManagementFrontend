import React from "react";
import {useState, useEffect, useContext} from "react";
import "./booking-css.css";
import {
  Form,
  FormGroup,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {BASE_URL} from "../../utils/Config";
const Booking = ({ tour, avgRating }) => {
  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const { price, reviews , title } = tour;
  const navigate=useNavigate();
  const {user} = useContext(AuthContext);
  const service=10;
  

  const [booking, setBooking] = useState({
    userId : user && user.user._id,
    fullName: "",
    userEmail: user && user.user.email,
    phone: "",
    bookAt: "",
    guestSize: "",
    tourName : title
  });
  const totalAmount =Number(price) *Number(booking.guestSize || 1) +Number(service);
  const handleClick =async (e) => {
    e.preventDefault();
    debugger;
    console.log(booking);
    try
    {
      if(!user || user===null || user===undefined)
        {
          navigate("/login");
          return;
        }
      const res = await fetch(`${BASE_URL}/booking`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });
      const result = await res.json();
      if (!res.ok){
        throw new Error(result.message);
      } 
      console.log(result);
      navigate("/thank-you");
      return ;
    } catch (err) {
      console.log(err);
      alert("Something went wrong  in booking " + err.message);
    }
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
