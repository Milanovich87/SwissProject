/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import { SwipeToSlide } from './components/Carousel/Carousel';
import Gallery from './components/Gallery/Gallery';
import { Services } from './components/Services/Services';
import { PageStyling } from './components/PageStyling/PageStyling';
import { Wardrobe } from './components/Wardrobe/Wardrobe';
import { Escort } from './components/Escort/Escort';
import { PrivacyPolicy } from './components/PrivacyPolicy/PrivacyPolicy';
import Form from './components/Form/Form';
import { Footer } from './components/Footer/Footer';

export const App = () => {

  return (

    <div className='App' >
      <Header />
      <Routes>
        <Route path='/'>
          <Route index element={<SwipeToSlide />} />
          <Route path='portfolio' element={<Gallery />} />
          <Route path='services' element={<Services />} />
          <Route path='styling' element={<PageStyling />} />
          <Route path='wardrobe' element={<Wardrobe />} />
          <Route path='escort' element={<Escort />} />
          <Route path='form' element={<Form />} />
          <Route path='privacy' element={<PrivacyPolicy />} />
        </Route>
      </Routes>
      <Footer />
    </div >
  );
}


