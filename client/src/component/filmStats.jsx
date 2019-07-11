import React from 'react';
// TODO populate with data from server
let num = 3.5;
let starWidth = 14.6 * num;
let divStyle={
  width: starWidth + 'px',
}


var getTomatoStyle = function(rating){
  if(rating> 74){
    return `url(https://www.vudu.com/bluesteel/images/Tomato_certified_fresh.svg)`;
  } else if(rating > 59){
    return `url(https://www.vudu.com/bluesteel/images/Tomato_fresh.svg)`;
  } else {
    return `url(https://www.vudu.com/bluesteel/images/Tomato_rotten.svg)`;
  }
}

let tomatoStyle={
  'background-image': getTomatoStyle(90)
}

const MovieStats = () => (
  <div>
    <div className="generalStats">
      <span className="stat date">Apr 5</span>
      <span className="stat important">NC-17</span>
      <span className="stat important">9000 min</span>
      <span className="stat important">CC</span>
    </div>
    <div className="ratings">

      <div className="starzone">
        <div className="nostars">
          <div className="stars" style={divStyle}></div>
        </div>
        <div className="starnum">(32,719)</div>
      </div>

      <div className="rtzone">
        <div className="tomato" style={tomatoStyle}>90%</div>
      </div>
    </div>

      <div className="buttonzone">
        <div className="mybutton">
          <button className="fancybutton">Trailer</button>
        </div>
        <div id="wishlist" className="mybutton">
          <button className="fancybutton">+Wishlist</button>
        </div>
        <div id="redeem" className="mybutton">
          <button className="fancybutton dma_zone">
            <div>Redeem</div>
            <div className="dma_icon"></div>
          </button>
        </div>
      </div>

  </div>
);

export default MovieStats;