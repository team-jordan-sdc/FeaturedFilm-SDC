import React from 'react';
import FilmInfo from './filminfo.jsx';
import {Background, BlueGradient} from '../style.jsx';

const BackgroundImage = (props) => (
  <Background style={
    {backgroundImage: `url(${props.film.movie_shot_url})`}
  }>
    <FilmInfo film={props.film}/>
    <BlueGradient />
  </Background>
)

export default BackgroundImage;
