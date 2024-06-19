import React from "react";
import CommonShared from "../shared/CommonShared";
import "../styles/tour.css";
import TourCard from "../shared/TourCard";
import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";
import { Row, Col, Container } from "reactstrap";
import { useState, useEffect } from "react";
import useFetch from "../Hooks/useFetch.js";
import { BASE_URL } from "../utils/Config.js";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const { data: {data: tourResponse}, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const {
    data: { data: tourCount },
  } = useFetch(`${BASE_URL}/tours/search/getTourCount`);
  
  debugger;
  // useEffect(() => {
  //   setPageCount(1);
  // },[])
  useEffect(() => {
    const pages = Math.ceil(tourCount / 8) || 1; // later we will use our backend
    // || 1 consumes 1.5 hr to debug
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCount,tourResponse]);
  return (
    <>
      <CommonShared title={"All Tours"} />
      <section className="pb-0 mb-0">
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <SearchBar />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          {loading && <h4 className="pt-5 text-center">Loading ....</h4>}
          {error && <h4 className="pt-5 text-center">{error}</h4>}
          {!loading && !error && (
            <Row>
              {tourResponse?.map((item) => (
                <Col lg="3" md="4" sm="6" key={item._id} className="mb-4">
                  <TourCard tour={item} />
                </Col>
              ))}
              <Col lg="12">
                <div className="gap-3 mt-4 pagination d-flex align-items-center justify-content-center">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      className={page === number ? "active__page" : ""}
                      onClick={() => setPage(number)}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Newsletter />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Tours;
