import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const [passwordRequirementsMet, setPasswordRequirementsMet] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    numeric: false,
    specialCharacter: false,
  });


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });

    validatePassword(value);
  };

  const validatePassword = (password) => {
    const lengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numericRegex = /\d/;
    const specialCharacterRegex = /[!@#$%^&*()_\-+=]/;

    setPasswordRequirementsMet({
      length: lengthRegex.test(password),
      uppercase: uppercaseRegex.test(password),
      lowercase: lowercaseRegex.test(password),
      numeric: numericRegex.test(password),
      specialCharacter: specialCharacterRegex.test(password),
    });
  };

  const isPasswordValid = () => {
    return (
      passwordRequirementsMet.length &&
      passwordRequirementsMet.uppercase &&
      passwordRequirementsMet.lowercase &&
      passwordRequirementsMet.numeric &&
      passwordRequirementsMet.specialCharacter
    );
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    if (!isPasswordValid()) {
      alert("Password does not meet requirements.");
      return;
    }

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
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
      <div className='mb-5 w-100 signup-img'>
          <div className='signup-img-text'>
            <h2 className='justify-content-center text-center signup-img-text'>Become A Venturer</h2>
          </div>
        
      </div>
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header text-dark p-2" style={{ background: '#f7e70c' }}>
            Unleash your Venture and discover the lands unseen!
          </h4>
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
                  placeholder="Create a username &#xf007;"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Enter your email &#xf0e0;"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Create a password &#xf023;"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}

                />


                {formState.password.length > 0 && (
                  <div className=" pl-1 password-requirements">
                    <p className="pl-0 password-requirements-parent">
                      Password Requirements:
                    </p>
                    <p className="pl-3 pt-0 password-requirements">
                      {passwordRequirementsMet.length ? (
                        <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
                      ) : (
                        <FontAwesomeIcon icon={faTimesCircle} className="text-danger" />
                      )}
                      {''} Minimum 8 characters long
                    </p>
                    <p className="pl-3 password-requirements">
                      {passwordRequirementsMet.uppercase ? (
                        <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
                      ) : (
                        <FontAwesomeIcon icon={faTimesCircle} className="text-danger" />
                      )}
                      {''} Must contain at least one uppercase letter
                    </p>
                    <p className="pl-3 password-requirements">
                      {passwordRequirementsMet.lowercase ? (
                        <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
                      ) : (
                        <FontAwesomeIcon icon={faTimesCircle} className="text-danger" />
                      )}
                      {''} Must contain at least one lowercase letter
                    </p>
                    <p className="pl-3 password-requirements">
                      {passwordRequirementsMet.numeric ? (
                        <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
                      ) : (
                        <FontAwesomeIcon icon={faTimesCircle} className="text-danger" />
                      )}
                      {''} Must contain at least one numeric character
                    </p>
                    <p className="pl-3 password-requirements">
                      {passwordRequirementsMet.specialCharacter ? (
                        <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
                      ) : (
                        <FontAwesomeIcon icon={faTimesCircle} className="text-danger" />
                      )}
                      {''}  Include at least one special character: {''} <br></br><p className="pl-3 password-requirements">(!@#$%^&*_-+=.)</p>
                    </p>
                  </div>
                )}
                <button
                  className={`btn btn-block ${isPasswordValid() ? "btn-info" : "btn-light"}`}
                  style={{ cursor: 'pointer' }}
                  type="submit"
                  disabled={!isPasswordValid()}
                >
                  Signup
                </button>

                <Link to="/login" onClick={() => handleNavLinkClick('/login')} className='mt-3 carousel-btn btn-block mx-auto btn1 custom-links'>
                  <Button className='mt-3 carousel-btn btn-block mx-auto btn1 custom-link' style={{ maxWidth: '345px' }}>
                    Already have an account? Login here!
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

export default Signup;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';
// import Auth from '../utils/auth';

// const Signup = () => {
//   const [formState, setFormState] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });
//   const [addUser, { error, data }] = useMutation(ADD_USER);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(formState);

//     try {
//       const { data } = await addUser({
//         variables: { ...formState },
//       });

//       Auth.login(data.addUser.token);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <main className="flex-row justify-center mb-4">
//       <div className="col-12 col-lg-10">
//         <div className="card">
//           <h4 className="card-header text-dark p-2" style={{ background: '#f7e70c' }}>Unleash your Venture and discover the lands unseen!</h4>
//           <div className="card-body">
//             {data ? (
//               <p>
//                 Success! You may now head{' '}
//                 <Link to="/">back to the homepage.</Link>
//               </p>
//             ) : (
//               <form onSubmit={handleFormSubmit}>
//                 <input
//                   className="form-input"
//                   placeholder="Username &#xf007;"
//                   name="username"
//                   type="text"
//                   value={formState.name}
//                   onChange={handleChange}
//                 />

//                 <input
//                   className="form-input"
//                   placeholder="Your email &#xf0e0;"
//                   name="email"
//                   type="email"
//                   value={formState.email}
//                   onChange={handleChange}
//                 />
//                 <input
//                   className="form-input"
//                   placeholder="Choose a Password "
//                   name="password"
//                   type="password"
//                   value={formState.password}
//                   onChange={handleChange}
//                 />
//                 <button
//                   className="btn btn-block btn-light"
//                   style={{ cursor: 'pointer' }}
//                   type="submit"
//                 >
//                   Signup
//                 </button>
//               </form>
//             )}

//             {error && (
//               <div className="my-3 p-3 bg-danger text-white">
//                 {error.message}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Signup;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';
// import Auth from '../utils/auth';

// const Signup = () => {
//   const [formState, setFormState] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });
//   const [addUser, { error, data }] = useMutation(ADD_USER);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   const passwordValidation = {
//     minLength: formState.password.length >= 8,
//     uppercase: /[A-Z]/.test(formState.password),
//     lowercase: /[a-z]/.test(formState.password),
//     specialChar: /[!@#$%^&*()_\-+=]/.test(formState.password),
//     numericChar: /\d/.test(formState.password),
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(formState);

//     if (!isFormValid()) {
//       alert('Password does not meet the criteria.');
//       return;
//     }

//     try {
//       const { data } = await addUser({
//         variables: { ...formState },
//       });

//       Auth.login(data.addUser.token);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   const isFormValid = () => {
//     const {
//       minLength,
//       uppercase,
//       lowercase,
//       specialChar,
//       numericChar,
//     } = passwordValidation;
//     return (
//       minLength && uppercase && lowercase && specialChar && numericChar
//     );
//   };

//   return (
//     <main className="flex-row justify-center mb-4">
//       <div className="col-12 col-lg-10">
//         <div className="card">
//           <h4 className="card-header text-dark p-2" style={{ background: '#f7e70c' }}>
//             Unleash your Venture and discover the lands unseen!
//           </h4>
//           <div className="card-body">
//             {data ? (
//               <p>
//                 Success! You may now head{' '}
//                 <Link to="/">back to the homepage.</Link>
//               </p>
//             ) : (
//               <form onSubmit={handleFormSubmit}>
//                 <input
//                   className="form-input"
//                   placeholder="Username"
//                   name="username"
//                   type="text"
//                   value={formState.username}
//                   onChange={handleChange}
//                 />
//                 <input
//                   className="form-input"
//                   placeholder="Your email"
//                   name="email"
//                   type="email"
//                   value={formState.email}
//                   onChange={handleChange}
//                 />
//                 <input
//                   className="form-input"
//                   placeholder="Choose a Password"
//                   name="password"
//                   type="password"
//                   value={formState.password}
//                   onChange={handleChange}
//                 />
//                 {formState.password.length > 0 && (
//                   <div className="password-validation">
//                     <p>Password requirements:</p>
//                     <ul>
//                       <li className={passwordValidation.minLength ? 'valid' : 'invalid'}>
//                         At least 8 characters
//                       </li>
//                       <li className={passwordValidation.uppercase ? 'valid' : 'invalid'}>
//                         At least one uppercase letter
//                       </li>
//                       <li className={passwordValidation.lowercase ? 'valid' : 'invalid'}>
//                         At least one lowercase letter
//                       </li>
//                       <li className={passwordValidation.specialChar ? 'valid' : 'invalid'}>
//                         At least one special character: !@#$%^&*()_\-+=
//                       </li>
//                       <li className={passwordValidation.numericChar ? 'valid' : 'invalid'}>
//                         At least one numeric character
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//                 <button
//                   className="btn btn-block btn-light"
//                   style={{ cursor: 'pointer' }}
//                   type="submit"
//                 >
//                   Signup
//                 </button>
//               </form>
//             )}

//             {error && (
//               <div className="my-3 p-3 bg-danger text-white">
//                 {error.message}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Signup;