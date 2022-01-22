import React from 'react';

import MovieBrowser from '../components/MovieBrowser';

// import data from '../static-data.json';
import data from '../static-video-data.json';

export default function Videos() {
  console.log(data);
  return (
    <div>
      <MovieBrowser data={data} page={true} />
    </div>
  );
}
