import React from 'react';
import { Wrapper } from './Wrapper';
import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { Button } from './Button';

class Description extends React.Component{
  render(){
      return (
          <Wrapper>
              <Title>Transformando ideias em soluções eficientes</Title>
              <Subtitle>Somos uma empresa de engenharia focada em soluções de hardware e software.</Subtitle>
              <Button>Saiba mais</Button>
          </Wrapper>
      )
  }
}

export default Description;
