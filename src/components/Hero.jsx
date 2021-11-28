import React from 'react';

import Play from '../play.svg';

export default function Hero() {
  return (
    <section className="bg-light text-dark">
      <div className="container py-5">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 text-md-start">
            <h1 className="mb-4" style={{ color: '#1e1e4b' }}>
              BashaMandakini
            </h1>
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
