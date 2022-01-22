import React from 'react';
import { Link } from 'react-router-dom';

import AnimatedPlay from './AnimatedPlay';

import { Col, Card, Button, Badge, Ratio } from 'react-bootstrap';

export default function AudioCard({ data }) {
  return data ? (
    <Col lg={6} xs={12}>
      <div className="d-flex justify-content-around text-start">
        <Card style={{ width: '100%' }} className="shadow-md">
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
