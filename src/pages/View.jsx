import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import VideoPlayer from 'react-video-js-player';

import Loader from '../components/Loader';
import MovieBrowser from '../components/MovieBrowser';

import { Col, Row, Badge, Ratio } from 'react-bootstrap';

import data from '../static-data.json';

export default function View(props) {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    const mov = data.filter((m) => m.id == id);
    setMovie(mov[0]);
  }, [id]);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return movie ? (
    <section>
      <div className="d-flex justify-content-center align-items-start">
        <div className="bg-light w-100 text-dark">
          <div className="movieContainer">
            <div className="bg-black moviePlayer">
              <div className="d-flex justify-content-center">
                {movie && movie.Video ? (
                  <VideoPlayer controls={true} src={movie.Video.url} className="video-player" />
                ) : (
                  <Loader />
                )}
              </div>
            </div>
            <div className="text-start py-2 mt-2 container">
              <div className="mx-2">
                <h1 className="text-featured-title py-1">{movie.Title}</h1>
                <div className="pb-2 d-flex">
                  {movie.categories &&
                    movie.categories.map((category) => {
                      return (
                        <Badge pill bg="primary" className="mx-1">
                          {category.name}
                        </Badge>
                      );
                    })}
                  <p className="text-secondary mb-0 mx-2 movie-card-text">
                    1hr 05mins <span className="text-dark">&bull;</span>
                    &nbsp;{movie.lang}&nbsp;
                    <span className="text-dark">&bull;</span> Sept 10, 2021
                  </p>
                </div>
                <p>{movie.Description}</p>
              </div>
            </div>
          </div>
          <MovieBrowser data={data} />
        </div>
      </div>
    </section>
  ) : (
    <Loader />
  );
}
