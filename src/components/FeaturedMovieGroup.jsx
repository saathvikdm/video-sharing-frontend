import React, { useEffect, useState } from 'react';
import { Button, Carousel, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import Feat from '../feat.png';

export default function FeaturedMovieCard() {
  const [featured, setFeatured] = useState();

  const defaultUrlPath = 'http://192.168.1.6:1337' || 'http://localhost:1337';

  useEffect(() => {
    fetch(`${defaultUrlPath}/videos`)
      .then((res) => res.json())
      .then((res) => {
        const filteredList = res.filter((item) => item.Featured === true);
        setFeatured(filteredList);
      });
  }, []);

  useEffect(() => {
    console.log(featured);
  }, [featured]);

  return (
    <section className="bg-black text-dark" id="featured">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          {/* <h1 className="text-light my-5 text-center">Featured Documentaries</h1> */}
          {featured && (
            <Carousel>
              {featured.map((item) => {
                return (
                  <Carousel.Item>
                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center text-light my-5 my-lg-0">
                      <img
                        className="d-block carousel-image"
                        src={`${defaultUrlPath}${item.Thumbnail.url}`}
                        alt="Second slide"
                      />
                      <Col style={{ marginLeft: '5%', marginRight: '5%' }} className="text-start">
                        <img
                          src={Feat}
                          alt="star"
                          height="100px"
                          className="my-2 mt-md-0"
                          style={{ position: 'relative', left: '-22px' }}
                        />
                        <h3 className="featured-title">{item.Title}</h3>
                        <p className="featured-description">{item.Description}</p>
                        <Button variant="primary">
                          {' '}
                          <Link
                            to={`/view/${item.id}`}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                          >
                            <FontAwesomeIcon icon={faPlay} /> &ensp;Watch Video
                          </Link>{' '}
                        </Button>
                      </Col>
                    </div>
                  </Carousel.Item>
                );
              })}

              {/* <Carousel.Item style={{ maxHeight: '50vh' }}>
                <div className="d-flex justify-content-center ">
                  <Row className="text-light align-items-center">
                    <Col lg={6}>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Col>
                    <Col lg={6}>
                      <img
                        className="d-block w-100"
                        src={`${defaultUrlPath}${featured[0].Thumbnail.url}`}
                        alt="First slide"
                        height="350px"
                      />
                    </Col>
                  </Row>
                </div>
              </Carousel.Item> */}

              {/* <Carousel.Item style={{ maxHeight: '50vh' }}>
              <img
                className="d-block w-100"
                src={`${defaultUrlPath}${featured[2].Thumbnail.url}`}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item> */}
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
}
