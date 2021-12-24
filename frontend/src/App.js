import React from 'react';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Homescreen from './Screens/Homescreen';
import ProductScreen from './Screens/ProductScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={Homescreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>
    </Router>
  );
};

export default App;
