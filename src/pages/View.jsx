import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import VideoPlayer from 'react-video-js-player';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

import Loader from '../components/Loader';
import MovieBrowser from '../components/MovieBrowser';

import { Col, Row, Badge, Ratio, Accordion, Modal, Button } from 'react-bootstrap';
import {
  faFilePdf,
  faFileAudio,
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import staticAudio from '../static.mp3';

import data from '../static-data.json';

export default function View(props) {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [audioTitle, setAudioTitle] = useState('');
  const [toggle, setToggle] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setAudioTitle(null);
    setShow(false);
  };
  const handleShow = (title) => {
    setAudioTitle(title);
    setShow(true);
  };

  useEffect(() => {
    const mov = data.filter((m) => m.id == id);
    setMovie(mov[0]);
  }, [id]);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return movie ? (
    <section>
      <div className="d-flex justify-content-center align-items-start">
        <div className="bg-light w-100 text-dark">
          <div className="movieContainer">
            <div className="bg-black moviePlayer">
              <div className="d-flex justify-content-center">
                {movie && movie.Video ? (
                  <VideoPlayer controls={true} src={movie.Video.url} className="video-player" />
                ) : (
                  <Loader />
                )}
              </div>
            </div>
            <div className="text-start py-2 mt-2 container">
              <div className="mx-0">
                <h1 className="text-featured-title text-primary-blue pb-0">{movie.Title}</h1>
                <div className="pb-2 d-flex">
                  <p className="text-secondary mb-0 movie-card-text">
                    {/* 1hr 05mins <span className="text-dark">&bull;</span> */}
                    <span className="text-dark">&nbsp;{movie.lang}&nbsp;</span>
                    <span className="text-dark">&bull;</span> Sept 10, 2021
                  </p>
                </div>
                <div className="social-shares">
                  <span className="fst-italic py-2">Share on social media: </span>
                  <FacebookShareButton className="Demo__some-network__share-button">
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <TwitterShareButton title={'test'}>
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <WhatsappShareButton title={'test'}>
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                </div>
                <div className="mx-1">
                  <div className="d-flex flex-column">
                    <p className={`view-desc${toggle ? '-open' : ''} py-2`}>{movie.Description}</p>
                    <div className={`${toggle ? '' : 'd-none'}`}>
                      {movie.audios && (
                        <div className="d-flex align-items-start py-2">
                          Audio(s):
                          <div className="flex-column">
                            {movie.audios &&
                              movie.audios.map((audio) => {
                                return (
                                  <div className="file">
                                    <FontAwesomeIcon icon={faFileAudio} className="audio-icon" />{' '}
                                    &ensp;
                                    <div
                                      //  href={divudio.url}
                                      onClick={(event) => {
                                        handleShow(event.target.innerHTML);
                                      }}
                                    >
                                      {audio.name}
                                    </div>
                                    <Modal
                                      show={show}
                                      onHide={handleClose}
                                      backdrop="static"
                                      keyboard={false}
                                      centered
                                    >
                                      <Modal.Header closeButton>
                                        <Modal.Title>
                                          <div className="d-flex align-items-center">
                                            <FontAwesomeIcon
                                              icon={faFileAudio}
                                              className="audio-icon"
                                            />
                                            <h5 className="mb-0">{audioTitle}</h5>
                                          </div>
                                        </Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body>
                                        <div className="w-auto">
                                          <p className="px-2 py-2">
                                            Brief description of the audio file. Lorem ipsum dolor
                                            sit amet consectetur, adipisicing elit. Delectus
                                            temporibus, hic iusto ipsum sapiente sit itaque
                                            distinctio voluptatum.
                                          </p>
                                          <audio controls>
                                            <source src={staticAudio} type="audio/mpeg" />
                                            Your browser does not support the audio element.
                                          </audio>
                                        </div>
                                      </Modal.Body>
                                      <Modal.Footer>
                                        <Button
                                          variant="primary"
                                          className="bg-primary-blue"
                                          onClick={handleClose}
                                        >
                                          Close
                                        </Button>
                                      </Modal.Footer>
                                    </Modal>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      )}
                      {movie.pdfs && (
                        <div className="d-flex align-items-start py-2">
                          PDF(s):
                          <div className="flex-column">
                            {movie.pdfs &&
                              movie.pdfs.map((pdf) => {
                                return (
                                  <div className="file">
                                    <FontAwesomeIcon icon={faFilePdf} className="pdf-icon" /> &ensp;
                                    <a href={pdf.url}>{pdf.name}</a>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      )}
                      <p className="py-2">
                        Categories:{' '}
                        {movie.categories &&
                          movie.categories.map((category) => {
                            return (
                              <Badge pill bg="none" className="mx-1 bg-primary-blue ">
                                {category.name}
                              </Badge>
                            );
                          })}
                      </p>
                    </div>
                    <div
                      className="d-flex align-items-start"
                      onClick={() => {
                        setToggle(!toggle);
                      }}
                    >
                      <span className="text-capitalize fst-italic fs-6 fw-bold select-disabled mb-4">
                        Show {!toggle ? 'more' : 'less'}{' '}
                      </span>
                      <div className="mx-2">
                        <FontAwesomeIcon
                          size="lg"
                          icon={!toggle ? faChevronDown : faChevronUp}
                          // color="linear-gradient(
                          //   264deg, , #ed6a00);"
                          color="#f69b00"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="fade_rule mt-3"></div>
                </div>
                {/* <Accordion flush>
                  <Accordion.Item>
                    <Accordion.Header>
                      Read more...
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="mx-1">
                        <p className="view-desc">{movie.Description}</p>
                        <p>
                          Categories:{' '}
                          {movie.categories &&
                            movie.categories.map((category) => {
                              return (
                                <Badge pill bg="primary" className="mx-1">
                                  {category.name}
                                </Badge>
                              );
                            })}
                        </p>
                        {movie.audios && (
                          <div className="d-flex align-items-start py-2">
                            Audio:
                            <div className="flex-column">
                              {movie.audios &&
                                movie.audios.map((audio) => {
                                  return (
                                    <div className="file">
                                      <FontAwesomeIcon icon={faFileAudio} className="audio-icon" />{' '}
                                      &ensp;
                                      <a href={audio.url}>{audio.name}</a>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        )}
                        {movie.pdfs && (
                          <div className="d-flex align-items-start py-2">
                            PDF(s):
                            <div className="flex-column">
                              {movie.pdfs &&
                                movie.pdfs.map((pdf) => {
                                  return (
                                    <div className="file">
                                      <FontAwesomeIcon icon={faFilePdf} className="pdf-icon" />{' '}
                                      &ensp;
                                      <a href={pdf.url}>{pdf.name}</a>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        )}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion> */}
              </div>
            </div>
          </div>
          <MovieBrowser data={data} />
        </div>
      </div>
    </section>
  ) : (
    <Loader />
  );
}
