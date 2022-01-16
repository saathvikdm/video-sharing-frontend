import React from 'react';

import About from '../components/About';
import FeaturedMovieCard from '../components/FeaturedMovieGroup';
import Hero from '../components/Hero';
import MovieBrowser from '../components/MovieBrowser';

import data from '../static-data.json';

export default function Home() {
  return (
    <>
      <FeaturedMovieCard data={data} />
      <MovieBrowser data={data} />
      <About />
    </>
  );
}
