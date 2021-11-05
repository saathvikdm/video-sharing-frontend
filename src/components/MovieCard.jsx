import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MovieCard({ data }) {
  console.log(data);
  const defaultUrlPath = 'http://192.168.1.6:1337' || 'http://localhost:1337';

  return data ? (
    <Col xl={3} lg={4} xs={6}>
      <Card bg="light" text="dark" className="mb-2">
        <Link to={`/view/${data.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card.Img
            src={`${defaultUrlPath}${data.Thumbnail.url}`}
            alt={data.Title}
            className="movie-card"
          />
          <Card.Body className="text-start movie-card-body">
            <Card.Title
              className="movie-card-title"
              style={{
                display: 'block',
                textOverflow: 'ellipsis',
                width: 'inherit',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              {data.Title}
            </Card.Title>
            <Card.Text
              className="movie-card-text"
              style={{
                display: 'block',
                textOverflow: 'ellipsis',
                width: 'inherit',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              {data.Description}
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  ) : (
    'loading...'
  );
}
