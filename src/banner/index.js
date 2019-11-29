import React from 'react';
import { Wrapper } from './Wrapper';
import { InnerWrapper } from './InnerWrapper';
import  Header from './header';
import Description from './description';
import Card from './card';

class Banner extends React.Component{
  render(){
      return (
          <Wrapper>
            <Header/>
            <InnerWrapper>
              <Card/>
              <Description/>
            </InnerWrapper>
          </Wrapper>
      )
  }
}

export default Banner;
