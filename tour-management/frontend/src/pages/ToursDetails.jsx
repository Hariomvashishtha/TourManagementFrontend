import React from "react";
import "../styles/tour-detail.css";
import {
  Container,
  Row,
  Col,
  Form,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { useRef,useState } from "react";
import { useParams } from "react-router-dom";
import toutData from "../assets/data/tours.js";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking.jsx";
import Newsletter from "../shared/Newsletter.jsx";

const ToursDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  
  // this is static data , later we will fetch from backend
  const tour = toutData.find((item) => item.id == id);
  //console.log(tour); // destructur properties from tour
  // format date
  const options = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    distance,
    maxGroupSize,
  } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);
  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    // alert(`${reviewText} and ${tourRating} rating`);
    // later we will call our api 
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <div className="tour__content">
              <img src={photo} alt="" />
              <div className="tour__info">
                <h2>{title}</h2>
                <div className="gap-5 d-flex align-items-center tour__info-Items">
                  <span className="gap-1 tout__rating d-flex align-items-center">
                    <i
                      class="ri-star-fill"
                      style={{ color: "var(--secondary-color)" }}
                    ></i>
                    {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? (
                      "Not Rated"
                    ) : (
                      <span>({reviews?.length})</span>
                    )}
                  </span>
                  <span>
                    <i class="ri-map-pin-fill"></i> {city}
                  </span>
                </div>
                <div className="tour__extra-details">
                  <span>
                    <i class="ri-map-pin-time-line"></i> {distance} km
                  </span>
                  <span>
                    <i class="ri-money-dollar-circle-line"></i> ${price} /per
                    person
                  </span>
                  <span>
                    <i class="ri-map-pin-user-fill"></i> {maxGroupSize} people
                  </span>
                </div>

                <h5>Description</h5>
                <p>{desc}</p>
              </div>

              {/* tour reviews */}
              <div className="mt-4 tour__reviews">
                <h4>Reviews ({reviews?.length} reviews)</h4>
                <Form >
                  <div className="gap-3 mb-4 d-flex align-items-center rating__group">
                    <span onClick={()=>setTourRating(1)}>
                      1 <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={()=>setTourRating(2)}>
                      2 <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={()=>setTourRating(3)}>
                      3 <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={()=>setTourRating(4)}>
                      4 <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={()=>setTourRating(5)}>
                      5 <i class="ri-star-s-fill"></i>
                    </span>
                  </div>
                  <div className="reviews__input">
                    <input type="text"  ref={reviewMsgRef} placeholder="Share your thoughts" required />
                    <button
                      type="submit"
                      className="ml-4 text-white btn primary__btn"
                      onClick={submitHandler}
                    >
                      Submit
                    </button>
                  </div>
                </Form>
                <ListGroup className="mt-4 user__reviews">
                  {reviews?.map((item, index) => (
                    <div className="gap-1 align-items-center review__item">
                      <img src={avatar} alt="" />
                      <div className="justify-between w-100 d-flex align-items-center">
                        <div className="review__details align-items-center ">
                          <h5>Hariom</h5>
                          <p>
                            {new Date().toLocaleDateString("en-US", options)}
                          </p>
                          <h6>Amazing Tour</h6>
                        </div>
                        <span className="d-flex align-items-center">
                          5 <i class="ri-star-s-fill"></i>
                        </span>
                      </div>
                    </div>
                  ))}
                </ListGroup>
              </div>
            </div>
          </Col>
          <Col className="mt-4" lg="4">
            <Booking tour={tour} avgRating={avgRating} />
          </Col>
        </Row>
      </Container>
      <Newsletter />
    </section>
  );
};

export default ToursDetails;
