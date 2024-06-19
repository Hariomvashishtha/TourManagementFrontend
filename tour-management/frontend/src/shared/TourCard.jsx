import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import "./Tour-card.css";
import calculateAvgRating from "../utils/avgRating";
const TourCard = ({ tour }) => {
  const { _id, title, photo, price, featured, reviews, city } = tour;
  
  const {totalRating,avgRating}=calculateAvgRating(reviews)

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <CardImg className="w-100 h-100" src={photo} alt="tour image" />
          {featured && <span>Featured</span>}
        </div>
        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="gap-1 tout__location d-flex align-items-center">
              <i class="ri-map-pin-line"></i> {city}{" "}
            </span>
            <span className="gap-1 tout__rating d-flex align-items-center">
              <i class="ri-star-fill"></i>
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not Rated"
              ) : (
                <span>({reviews?.length})</span>
              )}
            </span>
          </div>
          <h5 className="tour__title">
            <Link to={`/tours/${_id}`}>{title}</Link>
          </h5>
          <div className="mt-3 card__bottom d-flex align-items-center justify-content-between">
            <h5>
              ${price} <span>/per person</span>
            </h5>
            <button className="btn booking__btn">
              <Link to={`/tours/${_id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
