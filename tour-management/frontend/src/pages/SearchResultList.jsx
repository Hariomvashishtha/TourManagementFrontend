import React from 'react';
import { useState,useEffect } from 'react';
import CommonShared from "../shared/CommonShared.jsx";
import { Container,Row,Col } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import TourCard from '../shared/TourCard.jsx';
import NewsLetter from '../shared/Newsletter.jsx';
const SearchResultList = () => {

  // `useLocation` is a hook provided by `react-router-dom` that returns the current location object.
  // It contains information about the current URL, such as the path, search parameters, and hash.
  // In this code, `useLocation` is used to get the current location object and store it in a variable called `location`.
  // The `location` object can then be used to access the current URL information.
  debugger;
  const location = useLocation();
  const [tours,setTours] = useState(location.state);

  useEffect(() => {
    window.scrollTo(0,0);
  },[]);
  return (
   <>
   <CommonShared title={"Tours Search Result"} />
   <section>
    <Container>
    <Row>
    {
      tours?.data.length==0?
      <h4 className='text-center'>No Tour Found</h4>
      :
      tours?.data.map((tour, index) => {
        return (
          <Col lg="3" md="6" sm="6" key={tour._id} className="">
            <TourCard tour={tour} />
          </Col>
        );
      })
    }
    </Row>
    </Container>
    
   </section>

   <NewsLetter />
   </>
  )
}

export default SearchResultList