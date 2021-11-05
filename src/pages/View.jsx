import React, { useState, useEffect } from 'react';
import { Col, Row, Badge } from 'react-bootstrap';
import { useParams } from 'react-router';
import MovieBrowser from '../components/MovieBrowser';

export default function View() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  const defaultUrlPath = 'http://192.168.1.6:1337' || 'http://localhost:1337';

  useEffect(() => {
    fetch(`${defaultUrlPath}/videos/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setMovie(res);
      });
  }, [id]);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return movie ? (
    <section style={{ height: '100vh' }}>
      <div className="d-flex justify-content-center align-items-start">
        <div className="bg-dark w-100 text-light">
          <div className="container">
            <Row className="align-items-start justify-content-center pb-5">
              <Col xs={12} md={6} style={{ maxHeight: '480px' }}>
                {movie && movie.Video && (
                  <video
                    controls
                    src={`${defaultUrlPath}${movie.Video.url}`}
                    height="480px"
                    width="640px"
                    style={{ maxWidth: '90vw' }}
                    controlsList="nodownload"
                  />
                )}
              </Col>
              <Col className="text-start pt-5">
                <h1 className="text-warning">{movie.Title}</h1>
                <div className="pb-2">
                  {movie &&
                    movie.categories &&
                    movie.categories.map((category) => {
                      return (
                        <Badge pill bg="primary" className="mx-1">
                          {category.name}
                        </Badge>
                      );
                    })}
                </div>
                <p>{movie.Description}</p>
              </Col>
            </Row>
          </div>
          <MovieBrowser />
        </div>
      </div>
    </section>
  ) : (
    'loading...'
  );
}
