import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../styles/thank-you.css';


const ThankYou = () => {
  return (
   <section>
    <Container>
      <Row>
        <Col lg="12" className="pt-5 text-center">
          <div className='thank__you'>
            <span>
              <i class="ri-checkbox-circle-line"></i>
              <h1 className="mb-3 fw-semiboold">Thank You</h1>
              <h3 className="mb-4 fw-semiboold">Your tour is booked</h3>

              <Button className=" w-25 btn primary__btn"> <Link to ="/">Back to home</Link></Button>
            </span> 
          </div>
          
        </Col>
      </Row>
    </Container>
   </section>
  )
}

export default ThankYou