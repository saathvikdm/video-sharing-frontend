import { faFilePdf, faFileAudio } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import staticAudio from '../static.mp3';

export default function FileDownload({ type = 'pdf', item, icon }) {
  const [show, setShow] = useState(false);
  const [audioTitle, setAudioTitle] = useState('');

  const handleClose = () => {
    setAudioTitle(null);
    setShow(false);
  };
  const handleShow = (title) => {
    setAudioTitle(title);
    setShow(true);
  };

  return type === 'pdf' ? (
    <div className="file">
      <FontAwesomeIcon icon={faFilePdf} className={`${icon}-icon`} /> &ensp;
      <div className="d-flex flex-column">
        <h5 className="mb-0">
          <a href={item.url}>{item.name}</a>
        </h5>
        <p className="mb-0 text-muted">6.4 MB PDF</p>
      </div>
    </div>
  ) : (
    <div className="file">
      <FontAwesomeIcon icon={faFileAudio} className="audio-icon" /> &ensp;
      <div
        //  href={divudio.url}
        onClick={(event) => {
          handleShow(event.target.innerHTML);
        }}
      >
        <h5 className="mb-0">{item.name}</h5>
        <p className="mb-0 text-muted">6.4 MB PDF</p>
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faFileAudio} className="audio-icon" />
              <h5 className="mb-0">{audioTitle}</h5>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="w-auto">
            <p className="px-2 py-2">
              Brief description of the audio file. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Delectus temporibus, hic iusto ipsum sapiente sit itaque distinctio
              voluptatum.
            </p>
            <audio controls>
              <source src={staticAudio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="bg-primary-blue" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
