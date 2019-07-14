import React from 'react';
import { PurchasingZone, PurchasingButtonZone, PurchasingButton, RentButton, RentExpanded, PurchaseOption, RentListenZone, RentPrice, RentText } from  '../style.jsx';

class PurchaseButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rent: 'NoShow',
      rentText: 0,
      ownText: 0,
    }
    this.myInput = React.createRef();
    this.toggleRent = this.toggleRent.bind(this);
    this.displayRent = this.displayRent.bind(this);
  }

  componentDidMount(){
    this.setState({ rentText: this.myInput.current.offsetWidth })
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
          <PurchaseOption>SD ${this.parseCost(this.props.film.sd_rent)}</PurchaseOption>
          <PurchaseOption>HD ${this.parseCost(this.props.film.hd_rent)}</PurchaseOption>
        </RentExpanded>
      );
    }
  }

  parseCost(num){
    return Number.parseFloat(num/100).toFixed(2);
  }

  render(){
    return(
      <PurchasingZone>
        <PurchasingButtonZone >
          <RentListenZone rentSize={this.state.rentText / 2} onMouseEnter={() => this.toggleRent()} onMouseLeave={() => this.toggleRent()}>
            <RentButton >
              <RentText>{'Rent '}</RentText>
              <RentPrice ref={this.myInput}>${this.parseCost(this.props.film.sd_rent)}</RentPrice>
            </RentButton>
            {this.displayRent()}
          </RentListenZone>
        </PurchasingButtonZone>

        <PurchasingButtonZone>
          <PurchasingButton>Buy</PurchasingButton>
        </PurchasingButtonZone>

        <PurchasingButtonZone>
        </PurchasingButtonZone>

      </PurchasingZone>
    );
  }
}

export default PurchaseButtons;
