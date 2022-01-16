import React, { useState } from 'react';

import {
  faFilePdf,
  faFileAudio,
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ShowMore({ setToggle, toggle }) {
  console.log(toggle);
  return (
    <div className="d-flex align-items-start" onClick={() => setToggle(!toggle)}>
      <span className="text-capitalize fst-italic fs-6 fw-bold select-disabled mb-4">
        Show {!toggle ? 'more' : 'less'}{' '}
      </span>
      <div className="mx-2">
        <FontAwesomeIcon size="lg" icon={!toggle ? faChevronDown : faChevronUp} color="#f69b00" />
      </div>
    </div>
  );
}
