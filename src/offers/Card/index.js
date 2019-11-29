import React from 'react';
import { Wrapper } from './Wrapper';
import { InnerWrapper } from './InnerWrapper';
import { Logo } from './Logo';
import { Button } from './Button';
import { Name } from './Name';
import { Price } from './Price';
import { Promo } from './Promo';

import logoCare from '../../assets/LogoCare.png'
import logoCareSelected from '../../assets/LogoCareSelected.png'
import { Benefits } from './Benefits';

class Card extends React.Component{
  render(){
    const benefits = this.props.info.benefits.map((b, key) => 
    <Benefits selected={this.props.selected} key={key}>
        {b}
    </Benefits>)

    const benefitWrapper = {
        width: "100%",
        borderBottom: "1px solid #FFFFFF"
    }

      return (
          <Wrapper selected={this.props.selected}>
              <Promo>Promoção</Promo>
              <InnerWrapper selected={this.props.selected}>
                <Logo src={this.props.selected? logoCareSelected:logoCare}/>
                <Price selected={this.props.selected}>
                    <span className="cifrao">R$</span>
                    {this.props.info.price}
                </Price>
                <Name selected={this.props.selected}>{this.props.info.name}</Name>
                <div style={benefitWrapper}>
                    {benefits}
                </div>
              <Button selected={this.props.selected}> Comprar </Button>
              </InnerWrapper>
          </Wrapper>
      )
  }
}

export default Card;
