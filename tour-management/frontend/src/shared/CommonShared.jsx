import React from "react";
import "./commonSection-css.css";
import { Container } from "reactstrap";
import { Row, Col } from "reactstrap";
const CommonShared = ({ title }) => {
  return (
    <section className="common__section">
      <Container>
        <Row>
          <Col lg="12">
            <h1>{title}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CommonShared;
