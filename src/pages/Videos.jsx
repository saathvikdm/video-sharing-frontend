import React from 'react';

import MovieBrowser from '../components/MovieBrowser';

import data from '../static-data.json';

export default function Videos() {
  return (
    <div>
      <MovieBrowser data={data} page={true} />
    </div>
  );
}
