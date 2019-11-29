import React from 'react';
import { Wrapper } from './Wrapper';
import Card from './Card';

import { cardInfo } from './cardInfo';

class Offers extends React.Component{
  constructor(props) {
      super(props)

      this.state = {
          selected: 1
      }
  }  

  render(){
      const cards = cardInfo.map((i, key) => 
      <Card info={i} selected={this.state.selected === key} />)
      return (
          <Wrapper>
              {cards}
          </Wrapper>
      )
  }
}

export default Offers;
