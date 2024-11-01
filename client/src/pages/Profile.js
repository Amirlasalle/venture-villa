import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Row} from 'react-bootstrap';
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';
import '../index.css'
import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4 className='pt-5 mt-5'>
      This is exclusive content! To access this feature, simply sign up or log in. Don't miss out on the full experience – join our community today!
      </h4>
    );
  }

  return (
    <div>
      <div className="flex-row justify-center mb-3">
      <div className='profile-img-us move-it-750 mb-5'>
                    <Row className=''>
                        <div className='profile-img-text'>
                            <h2 className='justify-content-center text-center contact-img-text'>{userParam ? `${user.username}'s` : `${user.username}`}'s Venture Bucket List</h2>
                        </div>
                    </Row>
                </div>
        <h2 className="col-12 col-md-10 bg-light p-3 mb-5 take-out-750 font-poppins">
       {userParam ? `${user.username}'s` : `${user.username}`}'s Venture Bucket List
        </h2>

        <div className="col-12 col-md-10 mb-5">
          <ThoughtList
            thoughts={user.thoughts}
            title={`${user.username}'s thoughts...`}
            showTitle={false}
            showUsername={false}
          />
        </div>
        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px solid #1a1a1a' }}
          >
            <ThoughtForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
