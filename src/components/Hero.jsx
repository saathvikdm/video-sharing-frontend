import React from 'react';

import Play from '../play.svg';

export default function Hero() {
  return (
    <section className="bg-dark text-light">
      <div className="container py-5">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 text-md-start">
            <h1 className="text-warning mb-4">Language Documentaries</h1>
            <p>
              Phasellus tristique aliquet massa ut condimentum. Vivamus ut elit ullamcorper,
              placerat felis quis, euismod nisi. Praesent porta lectus sit amet nisl imperdiet
              bibendum. Duis pharetra luctus quam. Cras eget gravida nibh.
            </p>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <img src={Play} className="w-50 img-fluid" alt="play-video-illustration" />
          </div>
        </div>
      </div>
    </section>
  );
}
