import React from 'react';

const reducedDesc = function(desc){
  let descArr = desc.split('');
  for (var x = 210; x > 0; x -= 1) {
    if(descArr[x] === ' '){
       descArr = descArr.slice(0,x);
       x = -1;
    }
  }

  return descArr.join('');
}


class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descState: 'hide',
      shortDesc:'',
      longDesc:'',
    }

    this.toggleDesc = this.toggleDesc.bind(this);
    this.checkState = this.checkState.bind(this);
    this.returnDesc = this.returnDesc.bind(this);
  }

  toggleDesc(){
    console.log('test')
    console.log(this.props.desc);
    console.log(reducedDesc(this.props.desc));
  }

  checkState(){
    return this.state.descState;
  }

  returnDesc(){
    if(this.checkState() === 'hide'){
      return (
      <p> testing some cool stuff </p>
      );
    } else {
      return (
        <p> we got a problem </p>
      );
    }
  }

  render(){
    return(
      <div>
        {this.returnDesc()}
        <a onClick={this.toggleDesc}> click me </a>
      </div>
    )
  }
}

export default Description;
