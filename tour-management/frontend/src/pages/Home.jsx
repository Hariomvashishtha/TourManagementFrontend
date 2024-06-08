import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg01 from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import SubTitle from "../shared/SubTitle";
import SearchBar from "../shared/SearchBar";
import ServicesList from "../services/ServicesList";
import FeatureTourList from "../components/Featured-tours/FeatureTourList";
import experience from "../assets/images/experience.png";
import MasonaryImageGallary from "../components/Image-gallary/MasonaryImageGallary";
import Testimonials from "../components/Testimonial/Testimonials.jsx";
import Newsletter from "../shared/Newsletter.jsx";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <SubTitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating
                  <span className="highlight"> memories </span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate et quibusdam modi fugit iusto dignissimos.
                  Doloribus nostrum est a, minus voluptas quos at laborum
                  deleniti porro laudantium, quidem autem quisquam.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg01} alt="" className="h-300px" />
              </div>
            </Col>
            <Col lg="2">
              <div className="mt-4 hero__img-box">
                <video src={heroVideo} autoPlay loop muted controls></video>
              </div>
            </Col>
            <Col lg="2">
              <div className="mt-5 hero__img-box">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* start  hero section */}
      <section>
        <Container>
          <Row>
            <Col lg="3" className="text-center">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">
                We offer our<br></br> best services
              </h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>

      {/* fature  tour  section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <SubTitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeatureTourList />
          </Row>
        </Container>
      </section>

      {/* experience section */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <SubTitle subtitle={"Experience"}></SubTitle>
                <h2>
                  With our all experience <br></br> we will serve you
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="gap-5 counter__wrapper d-flex align-items-center">
                <div className="counter__box">
                  <span> 12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter__box">
                  <span> 2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span> 15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className ="experience__img">
              <img src={experience} alt=""></img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      {/* {/ * gallery section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" >
              <SubTitle subtitle={"Gallery"} />
              <h2 className="gallery__title">Visit our customers tour gallery</h2>
            </Col>
            <Col lg="12">
              <MasonaryImageGallary />
            </Col>
          </Row>
        </Container>
      </section>

      {/* review/tetimonial  section */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <SubTitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans says about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          
          </Row>
        </Container>
      </section>

      {/*news letter section */}
      <Newsletter />
    </>
  );
};

export default Home;
