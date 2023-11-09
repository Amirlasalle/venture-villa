import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Button } from 'react-bootstrap';
// import Col from 'react-bootstrap/esm/Col';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }


    setFormState({
      email: '',
      password: '',
    });
  };

  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  const handleNavLinkClick = (url) => {
    scrollToTop();
    navigate(url);
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className='w-100'>

        <h2 className="text-center pb-4 section-divider-y w-100" >
        </h2>
        <h2 className="text-center section-divider-b w-100" >
        </h2>
        <h2 className="mb-0 text-center section-divider-r w-100" >
        </h2>

      </div>
      <div className='mb-5 w-100 login-img'>
        <div className='signup-img-text'>
          <h2 className='justify-content-center text-center signup-img-text'>Welcome Back Venturer! </h2>
        </div>

      </div>
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header text-dark p-2" style={{ background: '#ffe100' }}>Login and start your Venture 😋 😎</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email &#xf0e0;"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Password &#xf023;"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />

                <Button
                  className="btn btn-block btn-light sign-log-btn "
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Login
                </ Button>


                <Link to="/signup" onClick={() => handleNavLinkClick('/signup')} className='mt-3 btn-block mx-auto sign-log-red btn1 custom-links'>
                  <Button className='mt-3 btn-block mx-auto btn1 sign-log-red custom-link' style={{ width: '375px', background: '#ff0000'  }}>

                    Don't have an account yet? Signup here!

                  </Button>
                </Link>

              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
