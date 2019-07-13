import styled from 'styled-components';

var getTomatoStyle = function(rating) {
  console.log(rating)
  if(rating> 74){
    console.log('super fresh');
    return `https://www.vudu.com/bluesteel/images/Tomato_certified_fresh.svg`;
  } else if(rating > 59){
    console.log('fresh');
    return `https://www.vudu.com/bluesteel/images/Tomato_fresh.svg`;
  } else {
    console.log('rotten');
    return `https://www.vudu.com/bluesteel/images/Tomato_rotten.svg`;
  }
}

var getStarWidth = function(num) {
  return (14.6 * (num / 100)) + 'px'
}

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
  width:72.4%;
  padding-left: 25px;
  float: left;
`;

const Title = styled.div`
  margin-bottom: 8px;
  padding-right: 15px;
  padding-right: 15px;
  font-size: 28px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
`;

const GeneralStats = styled.div`
  margin-bottom: 5px;
 `;

const Ratings = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

const Stat = styled.span`
  margin-right: 10px;
`;

const Date = styled(Stat)`
  line-height: 1.3;
  font-family: SystemFont,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: 250;
  text-transform: capitalize;
`;

const Important = styled(Stat)`
  background-color: #b0bec5;
  color: #000;
  font-size: 12px;
  border-radius: 7px;
  height: 17px;
  padding: 0 12px;
  line-height: 20px;
  display: inline-block;
  font-weight: 800;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
`;

const RatingZone = styled.div`
  margin-bottom: 5px;
  display: flex;
`;

const StarZone = styled.div`

  margin-right: 27px;
  height: 13px;
  display: inline-flex;
  font-size: 100%;
`;

const TomatoZone = styled.div`
  line-height: 13px;
`;

const NoStars = styled.div`
  cursor: pointer;
  display: inline-block;
  width: 73px;
  height: 13px;
  background-size: 73px 13px;
  background-repeat: no-repeat;
  background-image: url(https://www.vudu.com/bluesteel/images/Star_empty.svg);
  :hover {
    opacity: 0.7;
  }
`;

const StarNum = styled.div`
  margin-left: 4px;
  letter-spacing: .05em;
  font-size: 13px;
  line-height: 13px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: 300;
`;

const Stars = styled.div`
  width: ${props => getStarWidth(props.starWidth)};
  background-image: url(https://www.vudu.com/bluesteel/images/Star_full.svg);
  background-repeat: no-repeat;
  height:13px;
`;

const Tomato = styled.div`
  background-image: url(${props => getTomatoStyle(props.tomato)});
  background-repeat: no-repeat;
  background-size: auto 100%;
  margin-right: 15px;
  padding-left: 16px;
  font-size: 13px;
  height: 13px;
  display: inline-flex;
  font-weight: 300;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
`;

const ButtonZone = styled.div`
  display: flex;
  margin-top: 8px;
  margin-bottom: 15px;
  width: 448px;
  float:left;
  height: 30;
`;

const MyButton = styled.div`
  width: 33.3%;
`;

const WishList = styled(MyButton)`
  padding-left: 15px;
`;

const Redeem = styled(MyButton)`
  padding-left: 15px;
`;

const DmaIcon = styled.div`
  margin-left: 5px;
  background-image: url(https://www.vudu.com/bluesteel/images/dma_small.svg);
  width: 17px;
  height: 17px;
  background-size: 100%;
`;

const FancyButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: solid #007bc4 2px;
  height: inherit;
  font-size: 15px;
  line-height: 25px;
  border-radius: 6px;
  color: white;
  overflow: hidden;
  width:100%;
  text-align: center;
  outline: none;
  :hover {
    opacity: 0.7;
    color: #d8d8d8;
  }

  :active {
    color: #d8d8d8;
    border-color: #0068a5;
  }

`;

const FancyDmaButton = styled(FancyButton)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescriptionZone = styled.div`
  width: 412.5px;
  float: left;
  padding-right: 15px;
  margin-bottom: 50px;
`;

const DescriptionBox = styled.div`
  max-height: 90px;
  font-family: SystemFont,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: 250;
  transition: 0.5s;
`;


const ToggleMore = styled.a`
float: right;
color: #00a0ff;
font-size: 16px;
opacity: 0.8;
cursor: pointer;
:hover {
  opacity: 0.5;
}
`;

const PurchasingZone = styled.div`
  height:50px;
  float: left;
  width: 105%;
`;

const PurchasingButtonZone = styled.div`
  width: 30%;
  float: left;
  padding-right: 10px;

`;



const PurchasingButton = styled.div`
  width: 100%;
  background-color: #007bc4;
  border: none;
  border-radius: 5px;
  padding: 0;
  height: 40px;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  text-align: center;
  font-family: SystemFont,Helvetica Neue,Helvetica,Arial,sans-serif;
  display: inline-block;
  line-height: 42px;
  transition: .25s;


`;

const RentButton = styled(PurchasingButton)`

`;

const RentText = styled.span`
  font-size: 18px;
  font-weight: 400;
  transition: .25s;
`;

const RentPrice = styled.span`
  font-size: 18px;
  font-weight: 400;
  transition: .25s;
`;

const RentListenZone = styled.div`
  &:hover ${RentButton} {
    border-radius: 5px 5px 0 0;
  }
  &:hover ${RentPrice} {
    opacity: 0;
  }

  &:hover ${RentText} {
    position: absolute;
  }

`;



const RentExpanded = styled(PurchasingButton)`
  border-radius: 0 0 5px 5px;
  height: 80px;
  background-color: black;
  overflow: hidden;
`;

const PurchaseOption = styled.div`
  transition: .25s;
  width: 100%;
  height: 49%;
  background-color: #005885;
  margin-top: 1px;
  :hover{
    background-color: #007bc4;
  }
`;






export {
  Background,
  BlueGradient,
  FilmInfoZone,
  ContentZone,
  MovieThumbnail,
  MovieInfo,
  Title,
  GeneralStats,
  Ratings,
  Date,
  Important,
  StarZone,
  TomatoZone,
  RatingZone,
  NoStars,
  StarNum,
  Stars,
  Tomato,
  ButtonZone,
  MyButton,
  WishList,
  Redeem,
  DmaIcon,
  FancyButton,
  FancyDmaButton,
  DescriptionBox,
  DescriptionZone,
  PurchasingZone,
  ToggleMore,
  PurchasingButtonZone,
  PurchasingButton,
  RentButton,
  RentExpanded,
  PurchaseOption,
  RentListenZone,
  RentPrice,
  RentText,
};
