import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Culture from './pages/Culture';
import Contact from './pages/Contact';
import Header from './components/Header';
import GoBackNav from './components/GoBackNav';
import Footer from './components/Footer';
import Universities from './pages/Universities';
import AboutUs from './pages/AboutUs';
import Wishlists from './pages/Wishlists';
import ApiTest from './pages/ApiTest';
import Futbol from './pages/Futbol';
import Restaurants from './pages/Restaurants';
import Attractions from './pages/Attractions';
import BnB from './pages/BnB';
import SpecificPlace from './components/Places/SpecificPlace';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});


// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div id='root' className="flex-column justify-flex-start min-100-vh">
          <Header />
          <GoBackNav />

          <Routes>
            <Route path="/place/:id" element={<SpecificPlace />} />
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
            <Route
              path="/me"
              element={<Profile />}
            />
            <Route
              path="/profiles/:username"
              element={<Profile />}
            />
            <Route path="/thoughts/:thoughtId"
              element={<SingleThought />}
            />
            <Route path="/place/:id" element={<SpecificPlace />} />
            <Route
              path="/culture"
              element={<Culture />}
            />
            <Route
              path="/universities"
              element={<Universities />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route
              path="/aboutus"
              element={<AboutUs />}
            />
            <Route
              path="/wishlists"
              element={<Wishlists />}
            />
            <Route
              path="/futbol"
              element={<Futbol />}
            />
            <Route
              path="/restaurants"
              element={<Restaurants />}
            />
               <Route
              path="/attractions"
              element={<Attractions />}
            />
            <Route
              path="/bnb"
              element={<BnB />}
            />
            <Route
              path="/api"
              element={<ApiTest />}
            />

          </Routes>

          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
