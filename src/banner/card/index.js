import React from 'react';
import { Wrapper } from './Wrapper';
import { Text } from './Text';
import { Button } from './Button';
import { Input } from './Input';
 
class Card extends React.Component{
  render(){
      return (
          <Wrapper>
            <Text>Preencha o formulário para receber as novidades</Text>
            <Input placeholder="Nome" type="text" value=""/>            
            <Input placeholder="Email" type="text" value=""/> 
            <Input placeholder="Telefone" type="text" value=""/>  
            <Button>Enviar</Button>
          </Wrapper>
      )
  }
}

export default Card;
