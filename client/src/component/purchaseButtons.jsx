import React from 'react';
import { PurchasingZone, PurchasingButtonZone, PurchasingButton, RentButton, RentExpanded, PurchaseOption, RentListenZone, RentPrice, RentText } from  '../style.jsx';

class PurchaseButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rent: 'NoShow',
    }

    this.toggleRent = this.toggleRent.bind(this);
    this.displayRent = this.displayRent.bind(this);
  }

  toggleRent(){
    if (this.state.rent === 'NoShow') {
      this.setState({ rent: 'show' });
    } else {
      this.setState({ rent: 'NoShow' });
    }
  }

  displayRent(){
    if (this.state.rent === 'show') {
      return (
        <RentExpanded >
          <PurchaseOption> 100</PurchaseOption>
          <PurchaseOption>200</PurchaseOption>
        </RentExpanded>
      );
    }
  }



  render(){
    return(
      <PurchasingZone>
        <PurchasingButtonZone >
          <RentListenZone onMouseEnter={() => this.toggleRent()} onMouseLeave={() => this.toggleRent()}>
            <RentButton >
              <RentText>Rent</RentText>
              <RentPrice> $2.99</RentPrice>
            </RentButton>
            {this.displayRent()}
          </RentListenZone>
        </PurchasingButtonZone>
        <PurchasingButtonZone>
          <PurchasingButton>Buy</PurchasingButton>
        </PurchasingButtonZone>
        <PurchasingButtonZone>
          <PurchasingButton>Buy DVD</PurchasingButton>
        </PurchasingButtonZone>

      </PurchasingZone>
    );
  }
}

export default PurchaseButtons;
