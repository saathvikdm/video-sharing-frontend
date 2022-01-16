import React from 'react';

import { Button, Carousel, Col, Ratio, Row, Spinner } from 'react-bootstrap';

export default function Footer() {
  return (
    <div className="bg-dark text-light container-fluid">
      <div className="container">
        <Row className="py-4">
          <Col lg={4} className="lh-1 text-sm-start">
            <h5 className="footer-header-text mb-3">BashaMandakini</h5>
            <p>Manasagangothri, Hunsur Road, Mysore 570006</p>
            <p>+91-821-2515820</p>
            <p>+91-821-2515032</p>
            <p>contact@ciil.org</p>
          </Col>
          <Col lg={4} className="lh-1">
            <h5 className="footer-header-text mb-3">Organization</h5>
            <p>About Us</p>
            <p>Our Organization</p>
            <p>Contact</p>
            <p>Blog</p>
          </Col>
          <Col lg={4} className="lh-1 text-sm-end">
            <h5 className="footer-header-text mb-3">Links</h5>
            <p>CIIL Website</p>
            <p>Bharatavani</p>
            <p>FAQs</p>
            <p>Feedback</p>
          </Col>
        </Row>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between">
        <p className="my-1 pb-2 mx-5">Copyright 2022 © CIIL</p>
        <p className="my-1 pb-2 mx-5">
          <span className="mx-2">Terms of Service</span>{' '}
          <span className="mx-2">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}
