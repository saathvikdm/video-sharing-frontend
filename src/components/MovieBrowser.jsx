import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

export default function MovieBrowser() {
  const [movies, setMovies] = useState([]);

  const defaultUrlPath = 'http://192.168.1.6:1337' || 'http://localhost:1337';

  useEffect(() => {
    fetch(`${defaultUrlPath}/videos`)
      .then((res) => res.json())
      .then((res) => {
        setMovies(res);
      });
  }, []);

  useEffect(() => {
    console.log(movies[0]);
  }, [movies]);

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h1 className="text-dark mb-4 text-align-center">All Documentaries</h1>
        <div className="row justify-content-center justify-content-md-start align-items-start my-3 g-3">
          {movies && movies.map((movie) => <MovieCard data={movie} />)}
        </div>
      </div>
    </section>
  );
}
