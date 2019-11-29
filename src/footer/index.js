import React from 'react';
import { Wrapper } from './Wrapper';
import { Title } from './Title';
import { InnerWrapper } from './InnerWrapper';
import Form  from './form';
import Infos from './infos';

class Footer extends React.Component{
  render(){
      return (
          <Wrapper>
              <Title>Fale Conosco!</Title>
              <InnerWrapper>
                <Infos/>
                <Form/>
              </InnerWrapper>
          </Wrapper>
      )
  }
}

export default Footer;
