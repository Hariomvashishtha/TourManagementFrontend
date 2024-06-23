import React, { useEffect,useContext } from "react";
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
import {BASE_URL} from "../utils/Config.js";
import useFetch from "../Hooks/useFetch.js";
import {AuthContext} from "../context/AuthContext";
const ToursDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const {user} = useContext(AuthContext);
  
  // this is static data , later we will fetch from backend
  // const tour = toutData.find((item) => item.id == id);
  const {data:tour,loading,error} = useFetch(`${BASE_URL}/tours/${id}`);
  console.log("tourcoming");
  console.log(tour.data);
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
  } = tour?.data || {};
  const { totalRating, avgRating } = calculateAvgRating(reviews);
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
        if (!user) {
            alert("Please login or signup");
            return;
        }

        const reviewObj = {
            username: user?.username || user?.user?.username,
            reviewText,
            rating: tourRating || 0
        };

        console.log(reviewObj);

        const res = await fetch(`${BASE_URL}/review/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(reviewObj)
        });

        if (!res.ok) {
            const result = await res.json(); // Await response body for error message
            return alert(result.message || "Something went wrong in review submission");
        }

        const result = await res.json();
        console.log(result);
        alert("Review submitted: " + result.message);
    } catch (err) {
        console.log(err);
        alert("Something went wrong: " + err.message);
    }
};

  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, [tour]);

  return (
    <section>
      <Container>
        {
          loading && <h4 className="pt-5 text-center">Loading.....</h4>
        }
        {
          error && <h4 className="pt-5 text-center">{error}</h4>
        }
        {
            !loading && ! error && 
            <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo } alt="" />
                <div className="tour__info">
                  <h2>{title || "deafult title"}</h2>
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
                      <i class="ri-map-pin-fill"></i> {city  || 'default city'}
                    </span>
                  </div>
                  <div className="tour__extra-details">
                    <span>
                      <i class="ri-map-pin-time-line"></i> {distance || 100} km
                    </span>
                    <span>
                      <i class="ri-money-dollar-circle-line"></i> ${price || 100} /per
                      person
                    </span>
                    <span>
                      <i class="ri-map-pin-user-fill"></i> {maxGroupSize || 10} people
                    </span>
                  </div>
  
                  <h5>Description</h5>
                  <p>{desc || " default desc"}</p>
                </div>
  
                {/* tour reviews */}
                {/* <div className="mt-4 tour__reviews">
                  <h4>Reviews ({reviews?.length} reviews)</h4>
                  <Form >
                    <div className="gap-3 mb-4 d-flex align-items-center rating__group">
                      <span onClick={()=>setTourRating(1)} className={tourRating>=1 ? "rated" : "unrated"}>
                        1 <i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={()=>setTourRating(2)} className={tourRating>=2 ? "rated" : "unrated"}>
                        2 <i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={()=>setTourRating(3)} className={tourRating>=3 ? "rated" : "unrated"}>
                        3 <i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={()=>setTourRating(4)} className={tourRating>=4 ? "rated" : "unrated"}>
                        4 <i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={()=>setTourRating(5)} className={tourRating>=5 ? "rated" : "unrated"}>
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
                            <h5>{item?.username}</h5>
                            <p>
                              {new Date(item?.createdAt).toLocaleDateString("en-US", options)}
                            </p>
                            <h6>{item?.reviewText}</h6>
                          </div>
                          <span className="d-flex align-items-center">
                            {item?.rating} <i class="ri-star-s-fill"></i>
                          </span>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>  */}
              </div>
            </Col>
            <Col className="mt-4" lg="4">
              <Booking tour={tour?.data || {}} avgRating={avgRating} />
            </Col>
          </Row>
        }
      </Container>
      <Newsletter />
    </section>
  );
};

export default ToursDetails;
