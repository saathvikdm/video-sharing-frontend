import React, { useEffect, useState } from 'react';
import { Button, Carousel, Col, Ratio, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import Feat from '../feat.png';
import Thumb from '../thumbnail.jpg';

export default function FeaturedMovieCard() {
  const [featured, setFeatured] = useState();

  const [ratio, setRatio] = useState(window.innerWidth);

  const defaultUrlPath = 'http://localhost:1337';

  useEffect(() => {
    fetch(`${defaultUrlPath}/videos`)
      .then((res) => res.json())
      .then((res) => {
        const filteredList = res.filter((item) => item.Featured === true);
        setFeatured(filteredList);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(featured);
  }, [featured]);

  const handleResize = () => {
    setRatio(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize, false);
  }, []);

  // return (
  //   <section className="bg-black text-dark" id="featured">
  //     <div className="container-fluid">
  //       <div className="row align-items-center justify-content-center">
  //         {/* <h1 className="text-light my-5 text-center">Featured Documentaries</h1> */}
  //         {featured && (
  //           <Carousel>
  //             {featured.map((item) => {
  //               return (
  //                 <Carousel.Item>
  //                   <div className="d-flex flex-column flex-md-row justify-content-center align-items-center text-light my-5 my-lg-0">
  //                     <img
  //                       className="d-block carousel-image"
  //                       src={`${defaultUrlPath}${item.Thumbnail.url}`}
  //                       alt="Second slide"
  //                       style={{ maxHeight: '500px' }}
  //                     />
  //                     <Col style={{ marginLeft: '5%', marginRight: '5%' }} className="text-start">
  //                       <img
  //                         src={Feat}
  //                         alt="star"
  //                         height="100px"
  //                         className="my-2 mt-md-0"
  //                         style={{ position: 'relative', left: '-22px' }}
  //                       />
  //                       <h3 className="featured-title">{item.Title}</h3>
  //                       <p className="featured-description">{item.Description}</p>
  //                       <Button variant="primary">
  //                         {' '}
  //                         <Link
  //                           to={`/view/${item.id}`}
  //                           style={{ textDecoration: 'none', color: 'inherit' }}
  //                         >
  //                           <FontAwesomeIcon icon={faPlay} /> &ensp;Watch Video
  //                         </Link>{' '}
  //                       </Button>
  //                     </Col>
  //                   </div>
  //                 </Carousel.Item>
  //               );
  //             })}

  //             {/* <Carousel.Item style={{ maxHeight: '50vh' }}>
  //               <div className="d-flex justify-content-center ">
  //                 <Row className="text-light align-items-center">
  //                   <Col lg={6}>
  //                     <h3>First slide label</h3>
  //                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  //                   </Col>
  //                   <Col lg={6}>
  //                     <img
  //                       className="d-block w-100"
  //                       src={`${defaultUrlPath}${featured[0].Thumbnail.url}`}
  //                       alt="First slide"
  //                       height="350px"
  //                     />
  //                   </Col>
  //                 </Row>
  //               </div>
  //             </Carousel.Item> */}

  //             {/* <Carousel.Item style={{ maxHeight: '50vh' }}>
  //             <img
  //               className="d-block w-100"
  //               src={`${defaultUrlPath}${featured[2].Thumbnail.url}`}
  //               alt="Third slide"
  //             />

  //             <Carousel.Caption>
  //               <h3>Third slide label</h3>
  //               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  //             </Carousel.Caption>
  //           </Carousel.Item> */}
  //           </Carousel>
  //         )}
  //       </div>
  //     </div>
  //   </section>

  return (
    <section className="bg-black text-dark" id="featured">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <Carousel>
            <Carousel.Item>
              <div className="featured-overlay">
                <Ratio aspectRatio={ratio > 1000 ? '21x9' : '1x1'}>
                  <img className="d-block w-100" src={Thumb} alt="First slide" />
                </Ratio>
              </div>
              <Carousel.Caption className="carousel-caption">
                <Row className="d-flex align-items-center featured-row">
                  <Col lg={6} className="text-start mt-3 mt-md-0">
                    <h1>First slide label</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <Button variant="primary">
                      {' '}
                      <Link
                        // to={`/view/${data.id}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <FontAwesomeIcon icon={faPlay} /> &ensp;Watch Video
                      </Link>{' '}
                    </Button>
                  </Col>
                  <Col lg={6}>
                    <Ratio aspectRatio="16x9">
                      <img className="d-block w-100" src={Thumb} alt="First slide" height="350px" />
                    </Ratio>
                  </Col>
                </Row>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
