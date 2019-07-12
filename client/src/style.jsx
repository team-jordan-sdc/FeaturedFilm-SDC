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

export {
  Background,
  BlueGradient,
};