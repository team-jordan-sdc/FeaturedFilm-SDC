import React from 'react';
import MovieTitle from './movieTitle.jsx';
import MovieStats from './filmStats.jsx'
import { FilmInfoZone, ContentZone, MovieThumbnail, MovieInfo} from '../style.jsx';

const FilmInfo = (props) => (
  <div>
    <FilmInfoZone>
      <ContentZone>
        <MovieThumbnail>
          <img src={props.film.movie_cover_url} alt="movie image goes here"></img>
        </MovieThumbnail>
        <MovieInfo>
          <MovieTitle title={props.film.title} />
          <MovieStats film={props.film}/>
        </MovieInfo>
      </ContentZone>
    </FilmInfoZone>
  </div>
);

export default FilmInfo;