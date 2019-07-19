import styled from 'styled-components';

var getTomatoStyle = function(rating) {
  if(rating> 74){

    return `https://www.vudu.com/bluesteel/images/Tomato_certified_fresh.svg`;
  } else if(rating > 59){
    return `https://www.vudu.com/bluesteel/images/Tomato_fresh.svg`;
  } else {
    return `https://www.vudu.com/bluesteel/images/Tomato_rotten.svg`;
  }
}

var getStarWidth = function(num) {
  return (14.6 * (num / 100)) + 'px'
}

const FauxBody = styled.div`
  width: 100%;
  max-width: 1254px;
  min-width: 768px;
  margin: auto;
`;

const Background = styled.div`
  margin-left: -4.4%;
  margin-right: -4.4%;
  min-height: 450px;
  background-position: 100%;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-color: #051c2b;
  position: relative;

  font-size: 17px;
  color: aliceblue;
  line-height: 1.3;

  z-index: 0;
`;
Background.displayName = 'Background';

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
BlueGradient.displayName = 'BlueGradient';

const FilmInfoZone = styled.div`
  width: 700px;
  height: 420px;
  margin-left: 30px;
  margin-top: 30px;
  z-index: 2
`;
FilmInfoZone.displayName = 'FilmInfoZone';

const ContentZone = styled.div`
  padding-top: 25px;
  width: 100%;
  height: 362px;
`;
ContentZone.displayName = 'ContentZone';

const MovieThumbnail = styled.div`
  width: 168px;
  height: 238px;
  float: left;
  padding: 0;
  position: relative;
`;
MovieThumbnail.displayName = 'MovieThumbnail';

 const MovieInfo = styled.div`
  width:72.4%;
  padding-left: 25px;
  float: left;
`;
MovieInfo.displayName = 'MovieInfo';

const Title = styled.div`
  margin-bottom: 8px;
  padding-right: 15px;
  padding-right: 15px;
  font-size: 28px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
`;
Title.displayName = 'Title';

const GeneralStats = styled.div`
  margin-bottom: 5px;
`;
GeneralStats.displayName = 'GeneralStats';

const Ratings = styled.div`
  margin-bottom: 10px;
  display: flex;
`;
Ratings.displayName = 'Ratings';

const Stat = styled.span`
  margin-right: 10px;
`;
Stat.displayName = 'Stat';

const MyDate = styled(Stat)`
  line-height: 1.3;
  font-family: SystemFont,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: 250;
  text-transform: capitalize;
`;
MyDate.displayName = 'MyDate';

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
Important.displayName = 'Important';

const RatingZone = styled.div`
  margin-bottom: 5px;
  display: flex;
`;
RatingZone.displayName = 'RatingZone';

const StarZone = styled.div`
  margin-right: 27px;
  height: 13px;
  display: inline-flex;
  font-size: 100%;
`;
StarZone.displayName = 'StarZone';

const TomatoZone = styled.div`
  line-height: 13px;
`;
TomatoZone.displayName = 'TomatoZone';

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
NoStars.displayName = 'NoStars';

const StarNum = styled.div`
  margin-left: 4px;
  letter-spacing: .05em;
  font-size: 13px;
  line-height: 13px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: 300;
`;
StarNum.displayName = 'StarNum';

const Stars = styled.div`
  width: ${props => getStarWidth(props.starWidth)};
  background-image: url(https://www.vudu.com/bluesteel/images/Star_full.svg);
  background-repeat: no-repeat;
  height:13px;
`;
Stars.displayName = 'Stars';

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
Tomato.displayName = 'Tomato';

const ButtonZone = styled.div`
  display: flex;
  margin-top: 8px;
  margin-bottom: 15px;
  width: 448px;
  float:left;
  height: 30;
`;
ButtonZone.displayName = 'ButtonZone';

const MyButton = styled.div`
  width: 33.3%;
`;
MyButton.displayName = 'MyButton';

const WishList = styled(MyButton)`
  padding-left: 15px;
`;
WishList.displayName = 'WishList';

const Redeem = styled(MyButton)`
  padding-left: 15px;
`;
Redeem.displayName = 'Redeem';

const DmaIcon = styled.div`
  margin-left: 5px;
  background-image: url(https://www.vudu.com/bluesteel/images/dma_small.svg);
  width: 17px;
  height: 17px;
  background-size: 100%;
`;
DmaIcon.displayName = 'DmaIcon';

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
FancyButton.displayName = 'FancyButton';

const FancyDmaButton = styled(FancyButton)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
FancyDmaButton.displayName = 'FancyDmaButton';

const DescriptionZone = styled.div`
  width: 412.5px;
  float: left;
  padding-right: 15px;
  margin-bottom: 50px;
`;
DescriptionZone.displayName = 'DescriptionZone';

const DescriptionBox = styled.div`
  max-height: 90px;
  font-family: SystemFont,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: 250;
  transition: 0.5s;
`;
DescriptionBox.displayName = 'DescriptionBox';

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
ToggleMore.displayName = 'ToggleMore';

const PurchasingZone = styled.div`
  height:50px;
  float: left;
  width: 105%;
`;
PurchasingZone.displayName = 'PurchasingZone';

const PurchasingButtonZone = styled.div`
  width: 30%;
  float: left;
  padding-right: 10px;
`;
PurchasingButtonZone.displayName = 'PurchasingButtonZone';

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
PurchasingButton.displayName = 'PurchasingButton';

const RentButton = styled(PurchasingButton)`
`;
RentButton.displayName = 'RentButton';

const RentText = styled.div`
  font-size: 18px;
  font-weight: 400;
  transition: .25s;
  display: inline-block;
  vertical-align: top;
`;
RentText.displayName = 'RentText';

const RentPrice = styled.div`
  margin-left: 5px;
  font-size: 18px;
  font-weight: 400;
  visibility: visible;
  opacity: 1;
  transition: .25s;
  display: inline-block;
  vertical-align: top;
`;
RentPrice.displayName = 'RentPrice';

const RentListenZone = styled.div`
  &:hover ${RentButton} {
    border-radius: 5px 5px 0 0;
  }
  &:hover ${RentPrice} {
    visibility: hidden;
    opacity: 0;
  }
  &:hover ${RentText} {
    transform: translateX(${props => props.rentSize}px);
  }
`;
RentListenZone.displayName = 'RentListenZone';

const RentExpanded = styled(PurchasingButton)`
  border-radius: 0 0 5px 5px;
  height: 80px;
  background-color: black;
  overflow: hidden;
`;
RentExpanded.displayName = 'RentExpanded';

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
PurchaseOption.displayName = 'PurchaseOption';

const OwnButton = styled(PurchasingButton)`
`;
OwnButton.displayName = 'OwnButton';

const OwnText = styled.div`
  font-size: 18px;
  font-weight: 400;
  transition: .25s;
  display: inline-block;
  vertical-align: top;
`;
OwnText.displayName = 'OwnText';

const OwnPrice = styled.div`
  margin-left: 5px;
  font-size: 18px;
  font-weight: 400;
  visibility: visible;
  opacity: 1;
  transition: .25s;
  display: inline-block;
  vertical-align: top;
`;
OwnPrice.displayName = 'OwnPrice';

const OwnListenZone = styled.div`
  &:hover ${OwnButton} {
    border-radius: 5px 5px 0 0;
  }
  &:hover ${OwnPrice} {
    visibility: hidden;
    opacity: 0;
  }
  &:hover ${OwnText} {
    transform: translateX(${props => props.ownSize}px);
  }
`;
OwnListenZone.displayName = 'OwnListenZone';

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
  MyDate,
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
  OwnButton,
  OwnListenZone,
  OwnPrice,
  OwnText,
  FauxBody
};
