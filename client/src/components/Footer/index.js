import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import '../../index.css'

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary ">
      <div className=" w-100 mt-0 mb-0 banner ">
        <Image src={process.env.PUBLIC_URL + "/assets/short/colombia_flag.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around banner-image banner" />
        <h1 className='mt-0 mb-auto d-flex flex-column justify-content-center banner-text banner text-center'>Venture Villa</h1>
      </div>
      <div className="w-100 mt-5 p-2 text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
          Your Next{' '}
          {/* <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '} */}
          Venture Awaits!
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
