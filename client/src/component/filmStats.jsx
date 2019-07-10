import React from 'react';
// TODO populate with data from server
let num = 3.5;
let starWidth = 14.6 * num;
let divStyle={
  width: starWidth + 'px',
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
      </div>
    </div>

  </div>
);

export default MovieStats;