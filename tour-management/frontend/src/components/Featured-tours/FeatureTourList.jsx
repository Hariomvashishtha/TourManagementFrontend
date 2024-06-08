import React from 'react';
import TourCard from '../../shared/TourCard';
import tours from '../../assets/data/tours.js';
import {Col} from 'reactstrap';


const FeatureTourList = () => {
  return (
    

    
    tours?.map((tour, index)=>{
      return(
        <Col lg="3" md="6" sm="6" key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      )
    })

   
  )
}

export default FeatureTourList