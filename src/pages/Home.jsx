import React from 'react';
import About from '../components/About';
import FeaturedMovieCard from '../components/FeaturedMovieGroup';
import Hero from '../components/Hero';
import MovieBrowser from '../components/MovieBrowser';

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <FeaturedMovieCard />
      <MovieBrowser />
      <About />
    </>
  );
}
