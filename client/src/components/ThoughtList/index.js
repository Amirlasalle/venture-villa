import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return <h3 className='font-poppins'>No Ventures Yet</h3>;
  }

  return (
    <div className='font-poppins'>
      {showTitle && <h3>{title}</h3>}
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="card mb-3 font-poppins">
            <h4 className="card-header text-dark p-2 m-0 font-poppins"   style={{ background: '#ffe10052' }}>
              {showUsername ? (
                <Link
                  className="text-light font-poppins"
                  to={`/profiles/${thought.thoughtAuthor}`}
                >
                  {thought.thoughtAuthor} <br />
                  <span className="text-light font-poppins"style={{ fontSize: '1rem' }}>
                    added this venture to their bucklist on {thought.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span className="font-poppins" style={{ fontSize: '1rem' }}>
                    You added this venture to your bucklist on {thought.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body p-2">
              <p>{thought.thoughtText}</p>
            </div>
            <Link
              className="btn3 btn-block bg-colombia-br text-white"  
              to={`/thoughts/${thought._id}`}
            >
              Outline the experiences you're eager to have at this destination <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
