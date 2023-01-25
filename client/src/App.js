import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
// import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import Profile from './pages/Profile';

import LoginChat from './components/Chat/loginChat';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

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
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Container className='pt-5'>
        <Router>
          <>
            <Routes>
              <Route exact path='/' element={<Home />} />

              <Route exact path='/register' element={<Register />} />

              <Route path='/login' element={<Login />} />

              <Route path='/profile' element={<Profile />} />

              <Route path='/loginChat' element={<LoginChat />} />
            </Routes>
          </>
        </Router>
      </Container>
    </ApolloProvider>
  );
}

export default App;
