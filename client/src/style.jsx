import styled from 'styled-components';

const Background = styled.div`
  margin-left: -4.4%;
  margin-right: -4.4%;
  min-height: 450px;
  background-position: 100%;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-color: #051c2b;
  position: relative;

  z-index: 0;
`;

const BlueGradient = styled.div`
  background: linear-gradient(90deg,#051c2b 45%,transparent 750px);
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  z-index: -1
`;

const FilmInfoZone = styled.div`
  width: 700px;
  height: 420px;
  margin-left: 30px;
  margin-top: 30px;

  z-index: 2
`;

const ContentZone = styled.div`
  padding-top: 25px;
  width: 100%;
  height: 362px;
`;

const MovieThumbnail = styled.div`
  width: 168px;
  height: 238px;
  float: left;
  padding: 0;
  position: relative;
`;

 const MovieInfo = styled.div`
  width:70%;
  padding-left: 25px;
  float: left;
`;

export {
  Background,
  BlueGradient,
  FilmInfoZone,
  ContentZone,
  MovieThumbnail,
  MovieInfo,
};