import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Loader from './Loader';
import MovieCard from './MovieCard';

import { Button } from 'react-bootstrap';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MovieBrowser() {
  const [movies, setMovies] = useState([]);

  const defaultUrlPath = 'http://localhost:1337';

  useEffect(() => {
    fetch(`${defaultUrlPath}/videos`)
      .then((res) => res.json())
      .then((res) => {
        setMovies(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(movies[0]);
  }, [movies]);

  return (
    <section className="bg-light py-5 text-dark">
      <div className="container">
        <div className="d-flex justify-content-between mx-2">
          <h1 className="section-title text-start text-dark">Our Videos</h1>
          <div className="mt-1">
            <Button variant="outline-dark">
              <Link
                // to={`/view/${item.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <FontAwesomeIcon icon={faPlay} /> &ensp;More Videos
              </Link>
            </Button>
          </div>
        </div>
        <div className="row justify-content-center justify-content-md-start align-items-start my-3 g-3">
          {movies && movies.length !== 0 ? (
            movies.map((movie) => <MovieCard data={movie} />)
          ) : (
            <Loader content="movies" color="dark" />
          )}
        </div>
      </div>
    </section>
  );
}
