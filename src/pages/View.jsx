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

import { Col, Row, Badge, Ratio, Accordion, Modal, Button, Nav, Dropdown } from 'react-bootstrap';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../static-video-data.json';
import FileDownload from '../components/FileDownload';
import ShowMore from '../components/ShowMore';

export default function View(props) {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [toggle, setToggle] = useState(false);

  const [descriptionToggle, setDescriptionToggle] = useState(true);

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
                    {/* <span className="text-dark">&bull;</span> Sept 10, 2021 */}
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
                  <Nav variant="tabs" defaultActiveKey="description">
                    <Nav.Item>
                      <Nav.Link
                        eventKey="description"
                        className="text-primary-blue"
                        onClick={(e) => setDescriptionToggle(true)}
                      >
                        Description
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="transcript"
                        className="text-primary-blue"
                        onClick={(e) => setDescriptionToggle(false)}
                      >
                        Transcript
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <div className="d-flex flex-column">
                    {descriptionToggle ? (
                      <>
                        <p className={`view-desc${toggle ? '-open' : ''} py-2`}>
                          {movie.Description}
                        </p>
                        <div className={`${toggle ? '' : 'd-none'}`}>
                          <div className="my-2 view-downloads d-flex flex-column flex-lg-row justify-content-around">
                            {movie.pdfs && (
                              <div className="flex-column">
                                {movie.pdfs &&
                                  movie.pdfs.map((pdf) => {
                                    return <FileDownload item={pdf} icon={'pdf'} />;
                                  })}
                              </div>
                            )}
                            <div className="flex-column">
                              {movie.audios &&
                                movie.audios.map((audio) => {
                                  return <FileDownload item={audio} icon={'audio'} type="audio" />;
                                })}
                            </div>
                          </div>
                          <p className="py-2">
                            Categories:{' '}
                            {movie.categories &&
                              movie.categories.map((category) => {
                                return (
                                  <Badge pill bg="none" className="mx-1 bg-primary-blue ">
                                    {category}
                                  </Badge>
                                );
                              })}
                          </p>
                        </div>
                      </>
                    ) : (
                      <div>
                        <div className="d-flex flex-row align-items-center">
                          <Dropdown className="my-3">
                            <Dropdown.Toggle
                              variant="secondary"
                              id="dropdown-basic"
                              // className="bg-primary-blue"
                            >
                              English
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#">English</Dropdown.Item>
                              <Dropdown.Item href="#">Hindi</Dropdown.Item>
                              <Dropdown.Item href="#">Kannada</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <a href="#" target="_blank" rel="no-referrer">
                            <p className="mx-3 my-0">
                              <strong>
                                Download Transcript&ensp;
                                <FontAwesomeIcon icon={faDownload} />
                              </strong>
                            </p>
                          </a>
                        </div>
                        <p className={`view-desc${toggle ? '-open' : ''} py-2`}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eum
                          temporibus dolore ipsum autem voluptatum mollitia deleniti ut, obcaecati
                          quo dicta consequuntur explicabo nemo repellat blanditiis, commodi
                          nesciunt aut. Obcaecati. Architecto iusto repudiandae odio dolorum illo
                          corporis ad, tempore, modi non obcaecati natus eligendi ratione? Ratione
                          corporis delectus totam. Laborum, fugiat accusamus. Sequi asperiores
                          distinctio temporibus, recusandae unde reiciendis neque. Quidem expedita
                          dolor perferendis delectus esse ab, vel obcaecati totam deserunt iste sunt
                          distinctio nemo labore animi accusamus non iure, nobis praesentium fugiat
                          magni aliquid assumenda. Possimus sed distinctio perferendis. Ullam omnis
                          mollitia accusantium unde. Aliquid aperiam quaerat labore sunt facere
                          cumque deserunt expedita magnam sequi atque voluptates possimus tempora,
                          officiis magni quia vitae itaque, veritatis quas dolorum quam laboriosam.
                          Minus optio alias id voluptatum, cupiditate harum eligendi libero totam et
                          doloremque deleniti voluptatibus natus praesentium officia distinctio
                          omnis, deserunt asperiores modi recusandae rem odit ad iusto. Molestiae,
                          ducimus enim.
                        </p>
                      </div>
                    )}
                    <ShowMore setToggle={setToggle} toggle={toggle} />
                  </div>
                  {/* Faint sperating line */}
                  <div class="fade_rule mt-3"></div>
                </div>
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
