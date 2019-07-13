import React from 'react';
// TODO host tomatos on s3
import {GeneralStats, RatingZone, Date, Important, TomatoZone, StarZone, NoStars, StarNum, Stars, Tomato} from '../style.jsx';



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
          <Stars starWidth={props.film.star_rating} />
        </NoStars>
        <StarNum>({props.film.star_rating_count})</StarNum>
      </StarZone>
      <TomatoZone>
        <Tomato tomato={props.film.rt_rating}>{props.film.rt_rating}%</Tomato>
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