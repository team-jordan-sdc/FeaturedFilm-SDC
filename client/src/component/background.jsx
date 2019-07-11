import React from 'react';
import FilmInfo from './filminfo.jsx';

const BackgroundImage = (props) => (
  <div className="backgroundImage" style={
    {backgroundImage: `url(${props.film.movie_shot_url})`}
  }>
    <FilmInfo />
    <div className="blueGradient"></div>
  </div>
)

export default BackgroundImage;
