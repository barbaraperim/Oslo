import React from 'react';
import { Wrapper } from './Wrapper';
import  Header from './header';

class Banner extends React.Component{
  render(){
      return (
          <Wrapper>
            <Header/>
          </Wrapper>
      )
  }
}

export default Banner;
