import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AnimatedPlay from './AnimatedPlay';
import Loader from './Loader';

import { Button, Carousel, Col, Ratio, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function FeaturedMovieCard({ data }) {
  const [featured, setFeatured] = useState();

  const [ratio, setRatio] = useState(window.innerWidth);

  useEffect(() => {
    const filteredList = data.filter((item) => item.Featured === true);
    setFeatured(filteredList);
  }, [data]);

  useEffect(() => {
    console.log(featured);
  }, [featured]);

  const handleResize = () => {
    setRatio(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize, false);
  }, []);

  return (
    <section className="bg-black text-dark select-disabled" id="featured">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          {featured ? (
            <Carousel className="carousel-full-width">
              {featured.map((item) => {
                return (
                  <Carousel.Item>
                    <div className="featured-overlay">
                      <Ratio aspectRatio={ratio > 1000 ? '21x9' : '1x1'}>
                        <img
                          className="d-block w-100 featured-overlay-background"
                          src={item.Thumbnail.url}
                          alt="First slide"
                        />
                      </Ratio>
                    </div>
                    <Carousel.Caption className="carousel-caption">
                      <Row className="d-flex align-items-center featured-row mt-5 mt-sm-2 mt-md-0">
                        <Col lg={6} className="text-start mt-3 mt-lg-0 mb-md-3 mb-lg-0">
                          <h1 className="text-featured-title featured-title animate__animated animate__fadeInRight animate__fast">
                            {item.Title}
                          </h1>
                          <div className="featured-meta animate__animated animate__fadeInRight">
                            <p className="text-info mb-1">
                              {/* 1hr 05mins <span className="text-light">&bull;</span>&nbsp; */}
                              {item.lang}&nbsp;
                            </p>
                            <p className="featured-description">{item.Description}</p>
                          </div>
                          <Button
                            variant="primary"
                            className="animate__animated animate__fadeInRight animate__slow bg-primary-blue"
                          >
                            {' '}
                            <Link
                              to={`/view/${item.id}`}
                              style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                              <FontAwesomeIcon icon={faPlay} /> &ensp;Watch Video
                            </Link>{' '}
                          </Button>
                        </Col>
                        <Col lg={6}>
                          <Link
                            to={`/view/${item.id}`}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                          >
                            <div className="featured-thumbnail-container  animate__animated animate__fadeInLeft animate__delay-1s">
                              <div className="featured-thumbnail-play">
                                <AnimatedPlay />
                              </div>
                              <Ratio aspectRatio="16x9" className="featured-thumbnail-overlay">
                                <img
                                  className="d-block w-100 featured-thumbnail"
                                  src={item.Thumbnail.url}
                                  alt="First slide"
                                  height="350px"
                                />
                              </Ratio>
                            </div>
                          </Link>
                        </Col>
                      </Row>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          ) : (
            <Loader content="featured" />
          )}
        </div>
      </div>
    </section>
  );
}
