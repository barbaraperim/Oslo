import React from 'react';
import { Wrapper } from './Wrapper';
import { Title } from './Title';
import { InnerWrapper } from './InnerWrapper';
import Form  from './form';

class Footer extends React.Component{
  render(){
      return (
          <Wrapper>
              <Title>Fale Conosco</Title>
              <InnerWrapper>
                <Form/>
              </InnerWrapper>
          </Wrapper>
      )
  }
}

export default Footer;
