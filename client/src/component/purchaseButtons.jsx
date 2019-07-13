import React from 'react';
import { PurchasingZone, PurchasingButtonZone, PurchasingButton, } from  '../style.jsx';

class PurchaseButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render(){
    return(
      <PurchasingZone>
        <PurchasingButtonZone>
          <PurchasingButton>Own</PurchasingButton>
        </PurchasingButtonZone>
        <PurchasingButtonZone>
          <PurchasingButton>Rent</PurchasingButton>
        </PurchasingButtonZone>
        <PurchasingButtonZone>
          <PurchasingButton>Buy DVD</PurchasingButton>
        </PurchasingButtonZone>

      </PurchasingZone>
    );
  }
}

export default PurchaseButtons;
