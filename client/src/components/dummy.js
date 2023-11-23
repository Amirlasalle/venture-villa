<Tabs
defaultActiveKey="universities"
transition={false}
id="noanim-tab-example"
variant='tabs'
className="mb-3 tabs"
>
<Tab eventKey="universities" title="Universities" className=" tab">

  <Carousel slide={true} interval={null} nextIcon={<FontAwesomeIcon icon={faChevronRight} />} style={nextIconStyleTwo}
    prevIcon={<FontAwesomeIcon icon={faChevronLeft} />} className='about'>

    <Carousel.Item className="about-carousel-item">
      <div className='about-img-div'>
        <Image src={process.env.PUBLIC_URL + "/assets/short/Universidad-de-los-Andes.jpeg"} className="img-fluid d-flex flex-wrap about-img" />
      </div>
      <div>
        <div className='about-text'>
          <h1 className="pl-3">Universidad de los Andes
          </h1>
          <p className="pl-3 mb-3 justify-content-center about-text-p">Founded in 1948, Universidad de los Andes, Colombia's top-ranked university dedicated to academic excellence and truth-seeking.
          </p>

          <div className="button-container mb-2">
            <Link to="/" onClick={() => handleNavLinkClick('https://www.youtube.com/watch?v=BamIljS3reIr')} className='btn1'>
              <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '120px' }}>
                <a href='#cali' target="_blank" rel="noreferrer" className="btn1">Explore <FontAwesomeIcon icon={faChevronRight} size="md" /></a>
              </Button>
            </Link>
          </div>
          <h2 className="text-center pl-5 pr-5 pb-3 mb-0 about-section-divider-y about-text-sd" >
          </h2>
          <h2 className="text-center about-section-divider-b  mb-0 about-text-sd " >
          </h2>
          <h2 className="text-center about-section-divider-r about-text-sd" >
          </h2>
        </div>
      </div>
    </Carousel.Item>

    <Carousel.Item className="about-carousel-item">
      <div className='about-img-div'>
        <Image src={process.env.PUBLIC_URL + "/assets/short/javerianabogota.jpg"} className="img-fluid d-flex flex-wrap about-img" />
      </div>
      <div>
        <div className='about-text'>
          <h1 className="pl-3">Pontificia Universidad Javeriana
          </h1>
          <p className="pl-3 mb-3 justify-content-center about-text-p">Pontificia Universidad Javeriana is a private higher education institution, founded in 1623. It is one of the oldest and most prestigious universities in Colombia, with its main campus in Bogota and a branch campus in Cali.
          </p>

          <div className="button-container mb-2">
            <Link to="/" onClick={() => handleNavLinkClick('https://www.youtube.com/watch?v=BamIljS3reIr')} className='btn1'>
              <Button variant="info" size="md" className="carousel-btn btn-block mx-auto" style={{ maxWidth: '120px' }}>
                <a href='#cali' target="_blank" rel="noreferrer" className="btn1">Explore <FontAwesomeIcon icon={faChevronRight} size="md" /></a>
              </Button>
            </Link>
          </div>
          <h2 className="text-center pl-5 pr-5 pb-3 mb-0 about-section-divider-y about-text-sd" >
          </h2>
          <h2 className="text-center about-section-divider-b  mb-0 about-text-sd " >
          </h2>
          <h2 className="text-center about-section-divider-r about-text-sd" >
          </h2>
        </div>
      </div>
    </Carousel.Item>
  </Carousel>
</Tab>


<Tab eventKey="education" title="Education" className="tab">
  <div className="d-grid gap-3 ml-5 mr-5 about-carousel-item">

    <div className='bot'>
      <Link to="/universities" onClick={() => handleNavLinkClick('/universities')} className='w-100'>
        <Button variant='outline-light' className='btn2 w-100' size="lg">
          Browse All Universities <FontAwesomeIcon icon={faChevronRight} size="md" />
        </Button>
      </Link>
    </div>

    <div className='bot'>
      <a href='https://www.gooverseas.com/study-abroad/colombia' target="_blank" rel="noreferrer" className="w-100">
        <Button variant='outline-light' className='btn2 w-100' size="lg">
          Study abroad programs in Colombia <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" /> <FontAwesomeIcon icon={faChevronRight} size="md" />
        </Button>
      </a>
    </div>

    <div className='bot'>
      <a href='https://www.unisabana.edu.co/englishversion/academic-programs/undergraduate/gastronomy/' target="_blank" rel="noreferrer" className="w-100">
        <Button variant='outline-light' className='btn2 w-100' size="lg">
          The number one culinary progam in Colombia <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" /> <FontAwesomeIcon icon={faChevronRight} size="md" />
        </Button>
      </a>
    </div>

    <div className='bot'>
      <a href='https://ingenieria.bogota.unal.edu.co/en/programs/undergraduate/mechanical-engineering.html' target="_blank" rel="noreferrer" className="w-100">
        <Button variant='outline-light' className='btn2 w-100' size="lg">
          Colombia's premier Mechanical Engineering program <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" /> <FontAwesomeIcon icon={faChevronRight} size="md" />
        </Button>
      </a>
    </div>

    <div className='bot'>
      <a href='https://centrocatalina.com/' target="_blank" rel="noreferrer" className="w-100">
        <Button variant='outline-light' className='btn2 w-100' size="lg">
          Learn Spanish in Medellin <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" /> <FontAwesomeIcon icon={faChevronRight} size="md" />
        </Button>
      </a>
    </div>

    <div className='bot'>
      <a href='https://salsapura.com/en/salsa-school-in-cali-colombia-salsa-academy-in-cali-colombia/' target="_blank" rel="noreferrer" className="w-100">
        <Button variant='outline-light' className='btn2 w-100' size="lg">
          Elevate your dance skills in Cali <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" /> <FontAwesomeIcon icon={faChevronRight} size="md" />
        </Button>
      </a>
    </div>

    <div className='bot'>
      <a href='https://www.alliance-training.com/our-facilities/medellin-colombia/#:~:text=MEDELLIN%20TRAINING%20CENTER,UAEAC%2Dapproved%20pilot%20training%20programs' target="_blank" rel="noreferrer" className="w-100">
        <Button variant='outline-light' className='btn2 w-100' size="lg">
          Flight training with Alliance Aviation <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" /> <FontAwesomeIcon icon={faChevronRight} size="md" />
        </Button>
      </a>
    </div>

  </div>
</Tab>
</Tabs>

