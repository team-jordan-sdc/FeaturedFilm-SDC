import React from 'react';
import MovieTitle from './movieTitle.jsx';
import MovieStats from './filmStats.jsx'

const FilmInfo = (props) => (
  <div>
    <div className="filmInfo">
      <div className="contentZone">
        <div className="movieThumbnail">
          <img src="https://images2.vudu.com/poster2/1094591-168" alt="movie image goes here"></img>
        </div>
        <div className="movieInfo">
          <MovieTitle />
          <MovieStats />
        </div>


      </div>
    </div>
  </div>
);

export default FilmInfo;