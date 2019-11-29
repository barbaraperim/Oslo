import React from 'react';
import { Wrapper } from './Wrapper';
import Banner from '../banner';
import Offers from '../offers';
import Footer from '../footer';

function Main() {
  return (
      <Wrapper>
        <Banner/>
        <Offers/>   
        <Footer/>
      </Wrapper>
  );
}

export default Main;
