import React from 'react';
// TODO host tomatos on s3
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



const MovieStats = (props) => (
  <div>
    <div className="generalStats">
      <span className="stat date">{props.film.category_1} | {props.film.category_2} | {props.film.release_date}</span>
      <span className="stat important">{props.film.mpaa_rating}</span>
      <span className="stat important">{props.film.length} min</span>
      <span className="stat important">CC</span>
    </div>

    <div className="ratings">

      <div className="starzone">
        <div className="nostars">
          <div className="stars" style={
            {width: (14.6 * props.film.star_rating) + 'px',}
          }></div>
        </div>
        <div className="starnum">({props.film.star_rating_count})</div>
      </div>

      <div className="rtzone">
        <div className="tomato" style={
          {'background-image': getTomatoStyle(props.film.rt_rating)}
        }>{props.film.rt_rating}%</div>
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

    <div className="description_zone">
      <div className="description">
      Billy Batson is a streetwise 14-year-old who can magically transform into the adult superhero Shazam simply by shouting out one word. His newfound powers soon get put to the test when he squares off against the evil Dr. Thaddeus Sivana.
      </div>
    </div>
  </div>
);

export default MovieStats;