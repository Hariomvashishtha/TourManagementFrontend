import React from "react";
import TourCard from "../../shared/TourCard";
import { Col } from "reactstrap";
import useFetch from "../../Hooks/useFetch.js";
import { BASE_URL } from "../../utils/Config.js";

const FeatureTourList = () => {
  const { data: tourResponse, loading, error } = useFetch(
    `${BASE_URL}/tours/search/getFeaturedTours`
  );


  return (
    <>
      {loading && <h4>Loading ....</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        tourResponse?.data?.map((tour, index) => {
          return (
            <Col lg="3" md="4" sm="6" key={tour._id}>
              <TourCard tour={tour} />
            </Col>
          );
        })}
    </>
  );
};

export default FeatureTourList;
