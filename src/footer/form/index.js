import React from 'react';
import { Wrapper } from './Wrapper';
import { Field } from './Field';
import { Input } from './Input';
 
class Form extends React.Component{
  render(){
      return (
          <Wrapper>
              <Field>Nome</Field>
              <Input/>
              <Field>E-mail</Field>
              <Input/>
              <Field>Assunto</Field>
              <Input/>
              <Field>Mensagem</Field>
              <Input style={{height: "117px"}}/>
          </Wrapper>
      )
  }
}

export default Form;
