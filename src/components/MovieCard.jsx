import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src={`${defaultUrlPath}${data.Thumbnail.url}`}
            alt={data.Title}
            className="movie-card"
          />
          <Card.Body>
            <Card.Title
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
            <Card.Text>
              {data &&
                data.categories &&
                data.categories.map((category) => {
                  return (
                    <Badge pill bg="dark" className="me-1">
                      {category.name}
                    </Badge>
                  );
                })}
            </Card.Text>
            <Card.Text
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
            <Button variant="primary">
              {' '}
              <Link to={`/view/${data.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <FontAwesomeIcon icon={faPlay} /> &ensp;Watch Video
              </Link>{' '}
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Col>
  ) : (
    'loading...'
  );
}
