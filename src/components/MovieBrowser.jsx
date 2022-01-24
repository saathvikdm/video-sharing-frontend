import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Loader from './Loader';
import MovieCard from './MovieCard';

import { Button, InputGroup, FormControl, Dropdown } from 'react-bootstrap';
import { faPlay, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PaginationComponent from './Pagination';

export default function MovieBrowser({ data, page = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  return (
    <section className="bg-light py-5 text-dark">
      <div className="container">
        <div className="d-flex justify-content-between flex-column flex-md-row mx-2">
          <h1 className="section-title text-start text-dark">Our Videos</h1>
          <div className="mt-1">
            {!page ? (
              ''
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

        {page && (
          <div className="d-flex justify-content-end">
            <Dropdown className="mx-2">
              <Dropdown.Toggle
                variant="outline-secondary"
                id="dropdown-basic"
                className="outline-primary-blue"
              >
                Language&ensp;
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Hindi</Dropdown.Item>
                <Dropdown.Item>Kannada</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mx-2">
              <Dropdown.Toggle
                variant="outline-secondary"
                id="dropdown-basic"
                className="outline-primary-blue"
              >
                Category&ensp;
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Agriculture</Dropdown.Item>
                <Dropdown.Item>Culture</Dropdown.Item>
                <Dropdown.Item>Language</Dropdown.Item>
                <Dropdown.Item>Literature</Dropdown.Item>
                <Dropdown.Item>Land</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}

        <div className="row justify-content-center justify-content-md-start align-items-start my-3 g-3">
          {movies && movies.length !== 0 ? (
            page ? (
              <PaginationComponent
                data={movies}
                RenderComponent={MovieCard}
                pageLimit={2}
                dataLimit={8}
              />
            ) : (
              movies.filter((item, idx) => idx < 8).map((movie) => <MovieCard data={movie} />)
            )
          ) : (
            <Loader content="movies" color="dark" />
          )}
        </div>

        {!page ? (
          <Button variant="outline-dark mt-4">
            <Link to={`/videos`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <FontAwesomeIcon icon={faPlay} /> &ensp;More Videos
            </Link>
          </Button>
        ) : (
          ''
        )}
      </div>
    </section>
  );
}
