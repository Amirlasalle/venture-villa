import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import { Row,} from 'react-bootstrap';
import { QUERY_SINGLE_THOUGHT } from '../utils/queries';

const SingleThought = () => {

 
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
    // pass URL parameter
    variables: { thoughtId: thoughtId },
  });

  const thought = data?.thought || {};
  
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    
    <div className="home font-poppins">
            <div className='profile-img-us'>
                    <Row className=''>
                        <div className='profile-img-text'>
                            <h2 className='justify-content-center text-center contact-img-text'>Your Venture Bucket List</h2>
                        </div>
                        
                    </Row>
                </div>
                <div className='w-100 mb-5'>
                    <Row className=''>
                        <h2 className="text-center pb-4 section-divider-y w-100" >
                        </h2>
                        <h2 className="text-center section-divider-b w-100" >
                        </h2>
                        <h2 className="mb-0 text-center section-divider-r w-100" >
                        </h2>
                    </Row>
                </div>
      <h3 className="card-header bg-light text-dark p-2 m-0">
        {thought.thoughtAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          posted on {thought.createdAt} :
        </span>
      </h3>
      <div className="py-1 bg-light" >
        <blockquote
          className="p-2"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '0 solid #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {thought.thoughtText}
        </blockquote>
      </div>

      <div className="my-1 pl-0">
        <CommentList comments={thought.comments} /> 
      </div>
      <div className="m-2 p-4" style={{ border: '1px solid #1a1a1a' }}>
        <CommentForm thoughtId={thought._id} />
      </div>
    </div>
  );
};

export default SingleThought;
