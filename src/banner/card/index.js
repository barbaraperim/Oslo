import React from 'react';
import { Wrapper } from './Wrapper';
import { Text } from './Text';
import { Button } from './Button';
import { Input } from './Input';
import {InputWrapper} from './InputWrapper';

import iconEmail from '../../assets/email.svg';
import iconTelefone from '../../assets/call.svg';
import iconUser from '../../assets/user.svg';
 
class Card extends React.Component{
  render(){
      return (
          <Wrapper>
            <Text>Preencha o formulário para receber as novidades</Text>
            <InputWrapper> 
              <img src={iconUser} alt="Nome"/>
              <Input placeholder="Nome" type="text"/> 
            </InputWrapper>
            
            <InputWrapper>
              <img src={iconEmail} alt="Email"/>
              <Input placeholder="Email" type="text"/> 
            </InputWrapper>
            
            <InputWrapper>
              <img src={iconTelefone} alt="Telefone"/>
              <Input placeholder="Telefone" type="text"/>  
            </InputWrapper>
      
            <Button>Enviar</Button>
          </Wrapper>
      )
  }
}

export default Card;
