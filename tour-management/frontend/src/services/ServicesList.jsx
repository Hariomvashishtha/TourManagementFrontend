import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';
import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from "../assets/images/customization.png";
const serviceData=[
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "lorem ipsum dolor sit amet",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "lorem ipsum dolor sit amet",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "lorem ipsum dolor sit amet",       
    }
]

const ServicesList = () => {
  return (
   <>
   {
      serviceData.map((item, index)=>{
        return(
          <Col lg="3" md="6" sm="6" key={index}>
            <ServiceCard item={item} />
          </Col>
        )
      })        
   }
   </>
  )
}

export default ServicesList