import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from './componenets/Navbar/Navbar';
import Home from './componenets/Home/Home';
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom'
import Auth from './componenets/Auth/Auth';

const App = () => {
 

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        {/* Use Routes to wrap your Route components */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;