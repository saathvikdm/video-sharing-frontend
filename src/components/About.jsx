import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function About({ readMore = false }) {
  return (
    <section className="text-light" style={{ backgroundColor: '#000b36' }}>
      <div className="container py-5">
        <div className="row align-items-center justify-content-center mx-1">
          <div className="text-start">
            <h1 className="section-title text-featured-title mb-4">About BashaMandakini</h1>
            <p>
              <ul>
                <li>‘Bhasha Mandakini’ is a project of CIIL, Mysore.</li>
                <li>It serves as ‘Vishal Encyclopedia’ of Indian Languages.</li>
                <li>
                  Bhasha Mandakini is an experiment in visual anthropology of India’s Linguistic
                  landscape. It was started in 2005-2006. The objective is to create visually
                  appealing authentic material of television quality that would be of immense
                  importance in teaching and learning of Indian languages. Therefore it is an
                  audio-visual teaching- learning material.
                </li>
              </ul>
              It begun with four languages i.e., Bangla, Marathi, Tamil and Kannada. These (audio-
              visual content) were aired in Gyan-Darshan TV programme of IGNOU, New Delhi under a
              MoU between CIIL and IGNOU. It was also proposed to telecast them on various regional
              and national news channels. There was a proposal to convert this material into
              “Talking-Books” with large encyclopedic material with DVDs of not only the final
              products but also the important portions of the process of making these films and
              thereby enabling the users of seeing the full interviews of subject experts and
              performers which may not find place in the final product. This project is a part of
              the Educational Technology Unit of the Institute in partnership with large number of
              institutions, authors, scholars, translators, film producers and directors, media
              personalities, etc. under this scheme, CIIL undertook the task of producing 1000 short
              films of 30 minutes duration each in Bangla, Marathi, Kannada and Tamil. The design of
              each language segment is modular and incremental, and they refer to the six major
              divisions under each language. They are (1) space (2) Time (3) Society (4) Culture (5)
              Pattern and (6) Writing System. This project was aimed at providing edutainment using
              a combination of multimedia techniques, class room interaction, demonstrations,
              narrations, drama and language games.
            </p>
            {!readMore ? (
              <div className="d-flex justify-content-center">
                <Button variant="primary" className="bg-primary-blue">
                  {' '}
                  <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Read More
                  </Link>{' '}
                </Button>
              </div>
            ) : (
              ''
            )}
            {readMore ? (
              <div>
                <p>
                  The areas of coverage in each language were – Cultures and Performances, Land and
                  People, Language and Literature. Further explanation of these areas of coverage is
                  as below:-
                </p>
                <h4>Cultures and Performances</h4>
                <p>
                  Each language has a linkage with a set of cultural traits that make the universe
                  of that language unique. This cultural complexity is more visual when several
                  ethnic groups use the same language. In this context, Folklore, Fine Arts, Arts
                  &amp; Architecture, Festivals &amp; Rituals, 2 a Food and Attire,
                  theatre/performances, Films, etc. that typify the space of a given language are
                  covered in different episodes of the telefilms.
                </p>
                <h4>Land and People It is</h4>
                <p>
                  very important for a learner to know about the land where the language is spoken
                  and about the people who speak it. Therefore, geographical and demographic
                  information, historical development during different era, and a linguistic profile
                  of the region are covered.
                </p>
                <h4>Language</h4>
                <p>
                  In this segment, origin and development of each language, its status and
                  relationship with other languages, and its special variations are supposed to be
                  death in.
                </p>
                <h4>Literature</h4>
                <p>
                  Exposure to the literature of a language allows a greater awareness of the
                  language and its richness. In this segment oral and written literature of the
                  given speech community is focused, Different period as well as genre and important
                  authors/poets, texts and milestones are being taken care of. In nut-shell, it can
                  be said that Bhasha-Mandakini is a flagship project of the CIIL in the area of
                  language documentation. It blends the areas of language and ICT. It intends to
                  teach language through telefilms.
                </p>{' '}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
