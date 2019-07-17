import React from 'react';
import { DescriptionBox, ToggleMore } from '../style.jsx';

// splits description @ the first ' ' before 210 character limit
const reducedDesc = function(desc) {
  let descArr = desc.split('');
  for (let x = 210; x > 0; x -= 1) {
    if (descArr[x] === ' ') {
      descArr = descArr.slice(0, x);
      x = -1;
    }
  }
  return descArr.join('');
};


class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descState: 'hide',
    };

    this.toggleDesc = this.toggleDesc.bind(this);
    this.checkState = this.checkState.bind(this);
    this.returnDesc = this.returnDesc.bind(this);
  }

  toggleDesc() {
    if (this.state.descState === 'hide') {
      this.setState( {descState: 'show'} );
    } else {
      this.setState( {descState: 'hide'} );
    }
  }

  checkState() {
    return this.state.descState;
  }

  returnDesc() {
    let shortDesc = 'loading';
    if (this.props.desc) {
      shortDesc = reducedDesc(this.props.desc);
    }
    if (this.checkState() === 'hide') {
      return (
        <div onClick={this.toggleDesc}>
          {shortDesc}
          <span> ... </span>
          <ToggleMore> More </ToggleMore>
        </div>
      );
    } else {
      return (
        <div onClick={this.toggleDesc}>
          {this.props.desc}
          <ToggleMore> Less </ToggleMore>
        </div>
      );
    }
  }

  render(){
    return (
      <DescriptionBox>
        {this.returnDesc()}
      </DescriptionBox>
    );
  }
}

export default Description;
