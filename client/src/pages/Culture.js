// import React, { useState, useContext } from 'react';
// import universitiesData from '../components/Jsons/universities.json';
// import tradeschoolData from '../components/Jsons/tradeschool.json';
// import { Image, Container, Col, Card, Accordion, useAccordionButton, AccordionContext } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronRight, faChevronLeft, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

// const Universities = () => {
//   const [universities] = useState(universitiesData);
//   const [tradeschool] = useState(tradeschoolData);

//   const UP = <FontAwesomeIcon icon={faChevronUp} size="lg" className="up-to-down" />;
//   const DOWN = <FontAwesomeIcon icon={faChevronDown} size="lg" className="down-to-up" />;

//   function ContextAwareToggle({ children, eventKey, callback }) {
//     const { activeEventKey } = useContext(AccordionContext);

//     const decoratedOnClick = useAccordionButton(
//       eventKey,
//       () => callback && callback(eventKey),
//     );

//     const isCurrentEventKey = activeEventKey === eventKey;

//     return (
//       <button
//         type="button"
//         style={{ backgroundColor: isCurrentEventKey ? 'white' : 'rgb(4, 14, 158)' }}
//         onClick={decoratedOnClick}
//         className="offer-icon"
//       >
//         {isCurrentEventKey ? UP : DOWN}
//         {children}
//       </button>
//     );
//   }

//   const slideLeft = () => {
//     var slider = document.getElementById('slider');
//     slider.scrollLeft -= slider.offsetWidth;
//   };

//   const slideRight = () => {
//     var slider = document.getElementById('slider');
//     slider.scrollLeft += slider.offsetWidth;
//   };

//   return (
//     <div className="uni-container text-center">
//       <div className="uni-title-container">
//         <h1 className="title">Colombia &amp; Top Ten Universities</h1>
//         <h2 className="title-subcontent">Browse these amazing top ten universities in Colombia</h2>
//       </div>

//       <div className="uni-main mt-5 mb-5">
//         <Container fluid className="justify-content-around d-flex flex-wrap uni-main">
//           {universities.map((university, key) => (
//             <button key={key} className="document-category">
//               <a href={university.uniUrl} target="_blank" rel="noreferrer" className="no-decoration">
//                 <div className="document-category-container">
//                   <div className="document-category-item document-icon-title">
//                     <Col xs={3} md={3} className="justify-content-start ml-1 icon">
//                       <Image
//                         className="img-fluid icon-medium hydrated"
//                         no-hover="true"
//                         src={process.env.PUBLIC_URL + university.logo}
//                         style={{ width: '50px', height: '50px', border: 'none' }}
//                         thumbnail
//                       />
//                     </Col>
//                     <div className="document-title">
//                       <span className="document-cat-name">{university.name}</span>
//                       <p className="pl-0 document-category-desc">{university.brief}</p>
//                     </div>
//                   </div>
//                   <span className="document-category-item document-count">
//                     <FontAwesomeIcon icon={faChevronRight} size="lg" />
//                   </span>
//                 </div>
//               </a>
//             </button>
//           ))}
//         </Container>
//       </div>

//       <div className="offer-container mb-5">
//         <div className="offerCategory">
//           <Accordion>
//             <Card className="trades">
//               <Card.Header className="trade-header">
//                 <ContextAwareToggle eventKey="0" className="icon-small" />
//                 <span id="category-title" className="category-title pl-5">
//                   Top 10 Majors in Colombia
//                 </span>
//               </Card.Header>
//               <Accordion.Collapse eventKey="0">
//                 <Card.Body className="trade-main scrollable">
//                   <FontAwesomeIcon icon={faChevronLeft} size="lg" className="slider-icon left" onClick={slideLeft} />
//                   <div id="slider" style={{ whiteSpace: 'nowrap', overflowX: 'auto' }}>
//                     {tradeschool.map((trade, index) => (
//                       <Card id="" key={index} className="slider-card" style={{ width: '18rem', marginRight: '1rem', marginLeft: '1rem' }}>
//                         <a href={trade.uniUrl} className="item">
//                           <Card.Body className="trade-body">
//                             <Card.Img
//                               variant="top"
//                               className="img-fluid trade-image"
//                               src={process.env.PUBLIC_URL + trade.logo}
//                             />
//                             <Card.Title>{trade.name}</Card.Title>
//                           </Card.Body>
//                         </a>
//                       </Card>
//                     ))}
//                   </div>
//                   <FontAwesomeIcon icon={faChevronRight} size="lg" className="slider-icon right" onClick={slideRight} />
//                 </Card.Body>
//               </Accordion.Collapse>
//             </Card>
//           </Accordion>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Universities;

import React, { useState, useContext } from 'react';
import universitiesData from '../components/Jsons/universities.json';
import tradeschoolData from '../components/Jsons/tradeschool.json';
import { Image, Container, Col, Card, Accordion, useAccordionButton, AccordionContext } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Universities = () => {
  const [universities] = useState(universitiesData);
  const [tradeschool] = useState(tradeschoolData);

  const UP = <FontAwesomeIcon icon={faChevronUp} size="lg" className="up-to-down" />;
  const DOWN = <FontAwesomeIcon icon={faChevronDown}size="lg" className="down-to-up" />;

  function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <button
        type="button"
        style={{ backgroundColor: isCurrentEventKey ? 'white' : 'rgb(4, 14, 158)' }}
        onClick={decoratedOnClick}
        className="offer-icon"
      >
        {isCurrentEventKey ? UP : DOWN}
        {children}
      </button>
    );
  }

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft -= slider.offsetWidth;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft += slider.offsetWidth;
  };

  return (
    <div className="uni-container text-center">
      <div className="uni-title-container">
        <h1 className="title">Colombia & Top Ten Universities</h1>
        <h2 className="title-subcontent">Browse these amazing top ten universities in Colombia</h2>
      </div>

      <div className="uni-main mt-5 mb-5">
        <Container fluid className="justify-content-around d-flex flex-wrap uni-main">
          {universities.map((university, key) => (
            <Col xs={12} sm={6} md={4} lg={3} key={key} className="document-category">
              <a href={university.uniUrl} target="_blank" rel="noreferrer" className="no-decoration">
                <div className="document-category-container">
                  <div className="document-category-item document-icon-title">
                    <Image
                      className="img-fluid icon-medium hydrated"
                      no-hover="true"
                      src={process.env.PUBLIC_URL + university.logo}
                      style={{ width: '50px', height: '50px', border: 'none' }}
                      thumbnail
                    />
                    <div className="document-title">
                      <span className="document-cat-name">{university.name}</span>
                      <p className="pl-0 document-category-desc">{university.brief}</p>
                    </div>
                  </div>
                  <span className="document-category-item document-count">
                    <FontAwesomeIcon icon={faChevronRight} size="lg" />
                  </span>
                </div>
              </a>
            </Col>
          ))}
        </Container>
      </div>

      <div className="offer-container mb-5">
        <div className="offerCategory">
          <Accordion>
            <Card className="trades">
              <Card.Header className="trade-header">
                <ContextAwareToggle eventKey="0" className="icon-small" />
                <span id="category-title" className="category-title pl-5">
                  Top 10 Majors in Colombia
                </span>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="trade-main scrollable">
                  <FontAwesomeIcon icon={faChevronLeft} size="lg" className="slider-icon left" onClick={slideLeft} />
                  <div id="slider">
                    {tradeschool.map((trade, index) => (
                      <Card id="" key={index} className="slider-card" style={{ width: '18rem' }}>
                        <a href={trade.uniUrl} className="item">
                          <Card.Body className="trade-body">
                            <Card.Img
                              variant="top"
                              className="img-fluid trade-image"
                              src={process.env.PUBLIC_URL + trade.logo}
                            />
                            <Card.Title>{trade.name}</Card.Title>
                          </Card.Body>
                        </a>
                      </Card>
                    ))}
                  </div>
                  <FontAwesomeIcon icon={faChevronRight} size="lg" className="slider-icon right" onClick={slideRight} />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Universities;
