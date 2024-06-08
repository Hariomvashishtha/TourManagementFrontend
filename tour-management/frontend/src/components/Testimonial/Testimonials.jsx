import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings={
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    autoplaySpeed:2000,
    slidesToShow:3,
    slidesToScroll:1,
    swipeToSlide:true,
    responsive:[
      {
        breakpoint:992,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
          infinite:true,
          dots:true
        }
      },
      {
        breakpoint:576,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
          
        }
      }
    ]
  }
  return (
    <Slider {...settings}>
      <div className="px-3 py-4 testimonial">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="gap-4 mt-3 d-flex aligm-items-center">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mt-3 mb-0">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="px-3 py-4 testimonial">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="gap-4 mt-3 d-flex aligm-items-center">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mt-3 mb-0">Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="px-3 py-4 testimonial">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="gap-4 mt-3 d-flex aligm-items-center">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mt-3 mb-0">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
