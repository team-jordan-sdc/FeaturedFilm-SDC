import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import backgroundImage from '../client/src/component/background.jsx';
import Adapter from 'enzyme-adapter-react-16';
import dummyData from './dummyData.js'

Enzyme.configure({ adapter: new Adapter() });

describe('enzyme test of background', () => {
  test('check if renders', ()=>{
    const wrapper = shallow(<backgroundImage />)
    expect(wrapper.exists()).toBe(true);
  });

  test('check and make sure props are being sent', () => {
    const wrapper = shallow(<backgroundImage film={dummyData}/>);
    expect(wrapper.props().film.movie_shot_url).toEqual('https://fec1-arwen-featuredfilms.s3-us-west-2.amazonaws.com/mudoo+backgrounds/3-1280a.jpg')
  });
});