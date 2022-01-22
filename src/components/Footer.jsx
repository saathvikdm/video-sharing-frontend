import React from 'react';

import { Button, Carousel, Col, Ratio, Row, Spinner } from 'react-bootstrap';

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="bg-dark text-light container-fluid">
      <div className="container">
        <Row className="py-4">
          <Col lg={6} className="lh-1 text-start text-md-start text-lg-start">
            <h5 className="footer-header-text mb-3">Organization</h5>
            <p>
              Central Institute of Indian Languages, Manasagangothri, Hunsur Road, Mysore 570006
            </p>
            <p>
              <a href="tel:+91-821-2515820">+91-821-2515820</a>
            </p>
            <p>
              <a href="tel:+91-821-2515032">+91-821-2515032</a>
            </p>
            <p>
              <a href="mailto:contact@ciil.org">contact@ciil.org</a>
            </p>
          </Col>

          <Col lg={6} className="lh-1 text-start text-md-start text-lg-end mt-5 mt-lg-0">
            <h5 className="footer-header-text mb-3">BashaMandakini</h5>
            <p>
              <Link to={'/about'} style={{ textDecoration: 'none' }}>
                About Us
              </Link>
            </p>
            <p>
              <a
                href="https://www.ciil.org/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                CIIL Website
              </a>
            </p>
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
