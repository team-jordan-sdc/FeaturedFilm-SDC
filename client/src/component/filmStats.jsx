import React from 'react';
// TODO host tomatos on s3
import {GeneralStats, RatingZone, Date, Important, TomatoZone, StarZone, NoStars, StarNum} from '../style.jsx';



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
  'background-image': getTomatoStyle(90),
}



const MovieStats = (props) => (
  <div>
    <GeneralStats>
      <Date>{props.film.category_1} | {props.film.category_2} | {props.film.release_date}</Date>
      <Important>{props.film.mpaa_rating}</Important>
      <Important>{props.film.length} min</Important>
      <Important>CC</Important>
    </GeneralStats>

    <RatingZone>

      <StarZone>
        <NoStars>
          <div className="stars" style={
            {width: (14.6 * (props.film.star_rating / 100)) + 'px'}
          }></div>
        </NoStars>
        <StarNum>({props.film.star_rating_count})</StarNum>
      </StarZone>

      <TomatoZone>
        <div className="tomato" style={
          {'background-image': getTomatoStyle(props.film.rt_rating)}
        }>{props.film.rt_rating}%</div>
      </TomatoZone>
    </RatingZone>

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
        {props.film.description}
      </div>
    </div>
  </div>
);

export default MovieStats;