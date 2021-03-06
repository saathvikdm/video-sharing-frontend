import React from 'react';
import { Col, Card, Button, Badge, Ratio } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AnimatedPlay from './AnimatedPlay';

export default function MovieCard({ data }) {
  console.log(data);
  const defaultUrlPath = 'http://localhost:1337';

  // return data ? (
  //   <Col xl={3} lg={4} xs={6}>
  //     <Card bg="light" text="dark" className="mb-2">
  //       <Link to={`/view/${data.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
  //         <Card.Img
  //           src={`${defaultUrlPath}${data.Thumbnail.url}`}
  //           alt={data.Title}
  //           className="movie-card"
  //         />
  //         <Card.Body className="text-start movie-card-body">
  //           <Card.Title
  //             className="movie-card-title"
  //             style={{
  //               display: 'block',
  //               textOverflow: 'ellipsis',
  //               width: 'inherit',
  //               overflow: 'hidden',
  //               whiteSpace: 'nowrap',
  //             }}
  //           >
  //             {data.Title}
  //           </Card.Title>
  //           <Card.Text
  //             className="movie-card-text"
  //             style={{
  //               display: 'block',
  //               textOverflow: 'ellipsis',
  //               width: 'inherit',
  //               overflow: 'hidden',
  //               whiteSpace: 'nowrap',
  //             }}
  //           >
  //             {data.Description}
  //           </Card.Text>
  //         </Card.Body>
  //       </Link>
  //     </Card>
  //   </Col>
  // ) : (
  //   'loading...'
  // );

  return data ? (
    <Col xl={3} lg={4} xs={6}>
      <div className="d-flex justify-content-around text-start">
        <Card style={{ width: '18rem' }} className="shadow-md">
          <div className="featured-thumbnail-container">
            <div className="featured-thumbnail-play">
              <Link to={`/view/${data.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <AnimatedPlay heightWidth={55} />
              </Link>
            </div>
            <Ratio aspectRatio="16x9" className="featured-thumbnail-overlay">
              <Card.Img
                variant="top"
                src={`${defaultUrlPath}${data.Thumbnail.url}`}
                alt={data.Title}
                className="movie-card"
              />
            </Ratio>
          </div>
          <Card.Body className="movie-card-body">
            <Card.Title
              style={{
                display: 'block',
                textOverflow: 'ellipsis',
                width: 'inherit',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
              className="mb-1"
            >
              {data.Title}
            </Card.Title>
            <Card.Text>
              <p className="text-secondary mb-0 movie-card-text">
                1hr 05mins <span className="text-dark">&bull;</span> Tamil{' '}
                <span className="text-dark">&bull;</span> Sept 10, 2021
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Col>
  ) : (
    'loading...'
  );
}
