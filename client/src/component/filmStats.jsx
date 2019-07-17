import React from 'react';
import Description from './description.jsx';
import PurchaseButtons from './purchaseButtons.jsx';

import { GeneralStats, RatingZone, MyDate, Important, TomatoZone, StarZone, NoStars, StarNum, Stars, Tomato, ButtonZone, MyButton, WishList, Redeem, DmaIcon, FancyButton, FancyDmaButton, DescriptionBox, DescriptionZone } from '../style.jsx';

const MovieStats = (props) => (
  <div>
    <GeneralStats>
      <MyDate>{props.film.category_1} | {props.film.category_2} | {props.film.release_date}</MyDate>
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

    <ButtonZone>
      <MyButton>
        <FancyButton>Trailer</FancyButton>
      </MyButton>
      <WishList>
        <FancyButton>+Wishlist</FancyButton>
      </WishList>
      <Redeem>
        <FancyDmaButton>
          <div>Redeem</div>
          <DmaIcon />
        </FancyDmaButton>
      </Redeem>
    </ButtonZone>

    <DescriptionZone>
      <Description desc={props.film.description}/>
    </DescriptionZone>

    <PurchaseButtons film={props.film}/>
  </div>
);

export default MovieStats;
