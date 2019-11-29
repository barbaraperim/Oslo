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
            <Input placeholder="Nome" type="text"/>            
            <Input placeholder="Email" type="text"/> 
            <Input placeholder="Telefone" type="text"/>  
            <Button>Enviar</Button>
          </Wrapper>
      )
  }
}

export default Card;
