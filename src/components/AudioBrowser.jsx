import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Loader from './Loader';
import MovieCard from './MovieCard';
import PaginationComponent from './Pagination';

import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { faPlay, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AudioCard from './AudioCard';

export default function AudioBrowser({ data, page = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  return (
    <section className="bg-light py-5 text-dark">
      <div className="container">
        <div className="d-flex justify-content-between flex-column flex-md-row mx-2">
          <h1 className="section-title text-start text-dark">Our Audios</h1>
          <div className="mt-1">
            {!page ? (
              <Button variant="outline-dark">
                <Link to={`/videos`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <FontAwesomeIcon icon={faPlay} /> &ensp;More Videos
                </Link>
              </Button>
            ) : (
              <InputGroup className="mb-3 mt-3 mt-md-0">
                <FormControl
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search for a video"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </InputGroup>
            )}
          </div>
        </div>
        <div className="row justify-content-center justify-content-md-start align-items-start my-3 g-3">
          {movies && movies.length !== 0 ? (
            <PaginationComponent
              data={movies}
              RenderComponent={AudioCard}
              pageLimit={2}
              dataLimit={6}
            />
          ) : (
            <Loader content="movies" color="dark" />
          )}
        </div>
      </div>
    </section>
  );
}
