import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function Loader({ content, color = 'light' }) {
  return (
    <div className={`py-5 text-${color}`}>
      <Spinner animation="border" />
      <p>Loading {content}...</p>
    </div>
  );
}
