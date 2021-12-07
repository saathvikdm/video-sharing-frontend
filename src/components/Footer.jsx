import React from 'react';

import { Button, Carousel, Col, Ratio, Row, Spinner } from 'react-bootstrap';

export default function Footer() {
  return (
    <div className="bg-dark text-light container-fluid">
      <Row className="d-flex justify-content-between py-4">
        <Col lg={4} className="lh-1">
          <h4 className="text-featured-title mb-3">BashaMandakini</h4>
          <p>Manasagangothri, Hunsur Road, Mysore 570006</p>
          <p>+91-821-2515820</p>
          <p>+91-821-2515032</p>
          <p>contact@ciil.org</p>
        </Col>
        <Col lg={4} className="lh-1">
          <h4 className="text-featured-title mb-3">Organization</h4>
          <p>About Us</p>
          <p>Our Organization</p>
          <p>Contact</p>
          <p>Blog</p>
        </Col>
        <Col lg={4} className="lh-1">
          <h4 className="text-featured-title mb-3">Links</h4>
          <p>CIIL Website</p>
          <p>Bharatavani</p>
          <p>FAQs</p>
          <p>Feedback</p>
        </Col>
      </Row>
      <div className="bg-black py-2 text-center ">Copyright 2021 © CIIL</div>
    </div>
  );
}
