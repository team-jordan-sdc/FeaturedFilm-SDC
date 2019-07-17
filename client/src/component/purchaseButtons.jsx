import React from 'react';
import { PurchasingZone, PurchasingButtonZone, PurchasingButton, RentButton, RentExpanded, PurchaseOption, RentListenZone, RentPrice, RentText, OwnButton, OwnListenZone, OwnPrice, OwnText } from  '../style.jsx';

class PurchaseButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rent: 'NoShow',
      own: 'NoShow',
      rentText: 0,
      ownText: 0,
    }
    this.myRentInput = React.createRef();
    this.myOwnInput = React.createRef();
    this.toggleRent = this.toggleRent.bind(this);
    this.displayRent = this.displayRent.bind(this);
    this.toggleOwn = this.toggleOwn.bind(this);
    this.displayOwn = this.displayOwn.bind(this);
  }

  componentDidMount(){
    this.setState({ rentText: this.myRentInput.current.offsetWidth });
    this.setState({ ownText: this.myOwnInput.current.offsetWidth });
  }

  toggleRent(){
    if (this.state.rent === 'NoShow') {
      this.setState({ rent: 'show' });
    } else {
      this.setState({ rent: 'NoShow' });
    }
  }

  toggleOwn(){
    if (this.state.own === 'NoShow') {
      this.setState({ own: 'show' });
    } else {
      this.setState({ own: 'NoShow' });
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

  displayOwn(){
    if (this.state.own === 'show') {
      return (
        <RentExpanded >
          <PurchaseOption>SD ${this.parseCost(this.props.film.sd_cost)}</PurchaseOption>
          <PurchaseOption>HD ${this.parseCost(this.props.film.hs_cost)}</PurchaseOption>
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
              <RentPrice ref={this.myRentInput}>${this.parseCost(this.props.film.sd_rent)}</RentPrice>
            </RentButton>
            {this.displayRent()}
          </RentListenZone>
        </PurchasingButtonZone>

        <PurchasingButtonZone>
          <OwnListenZone ownSize={this.state.ownText / 2} onMouseEnter={() => this.toggleOwn()} onMouseLeave={() => this.toggleOwn()}>
            <OwnButton>
              <OwnText>{'Own '}</OwnText>
              <OwnPrice ref={this.myOwnInput}>${this.parseCost(this.props.film.sd_cost)}</OwnPrice>
            </OwnButton>
            {this.displayOwn()}
          </OwnListenZone>
        </PurchasingButtonZone>

        <PurchasingButtonZone>
        </PurchasingButtonZone>

      </PurchasingZone>
    );
  }
}

export default PurchaseButtons;
