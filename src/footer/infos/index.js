import React from 'react';
import { Wrapper } from './Wrapper';
import { Description } from './Description';
import { Title } from './Title';

import IconEmail from '../../assets/Iconemail.svg';
import IconLocalizacao from '../../assets/IconLocalizacao.svg';
import IconTelefone from '../../assets/Icontelefone.svg';

class Infos extends React.Component{
  render(){
      return (
          <Wrapper>
              <Title>
                  <img src={IconLocalizacao} alt="localizacao"/>
                  Onde estamos?
              </Title>
              <Description>Av. José de Souza Campos, 900 (Av Norte Sul), 4º andar, sala 41. Cambuí - Campinas, SP</Description>
              <Title>
                  <img src={IconEmail} alt="email"/>
                  E-mail
              </Title>
              <Description>contato@oslotech.com.br</Description>
              <Title>
                  <img src={IconTelefone} alt="telefone"/>
                  Telefone
              </Title>
              <Description>+55 19 3381 1210</Description>
          </Wrapper>
      )
  }
}

export default Infos;
