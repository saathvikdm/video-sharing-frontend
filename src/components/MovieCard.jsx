import React from 'react';
import { Link } from 'react-router-dom';

import AnimatedPlay from './AnimatedPlay';

import { Col, Card, Button, Badge, Ratio } from 'react-bootstrap';

export default function MovieCard({ data }) {
  console.log(data);
  return data ? (
    <Col xl={3} lg={4} xs={6}>
      <div className="d-flex justify-content-around text-start">
        <Card style={{ width: '18rem' }} className="shadow-md">
          <a href={`/view/${data.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="featured-thumbnail-container">
              <div className="featured-thumbnail-play">
                {/* <Link to={`/view/${data.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <AnimatedPlay heightWidth={55} />
              </Link> */}

                <AnimatedPlay heightWidth={55} />
              </div>
              <Ratio aspectRatio="16x9" className="featured-thumbnail-overlay">
                <Card.Img
                  variant="top"
                  src={data.Thumbnail.url}
                  alt={data.Title}
                  className="movie-card"
                />
              </Ratio>
            </div>
          </a>
          <Card.Body className="movie-card-body">
            <Card.Title
              style={{
                display: 'block',
                textOverflow: 'ellipsis',
                width: 'inherit',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
              className="mb-1 movie-card-title text-primary-blue"
            >
              {data.Title}
            </Card.Title>
            <Card.Text>
              <p className="text-secondary mb-0 movie-card-text">
                <span className="text-dark">{data.lang}&nbsp;</span>
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
