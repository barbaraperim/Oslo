import React from 'react';
import { Wrapper } from './Wrapper';
import { Logo } from './Logo';
import { Button } from './Button';
import { Text } from './Text';

import logoSrc from '../../assets/logo.png'

class Header extends React.Component{
  render(){
      return (
          <Wrapper>
              <Logo  alt="logo" src={logoSrc}/>
              <Text>Quem somos?</Text>
              <Text>O que fazemos?</Text>
              <Text>Segmentos</Text>
              <Text>Contato</Text>
              <Button>Entrar</Button>
          </Wrapper>
      )
  }
}

export default Header;
