import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Filminfo from '../client/src/component/filminfo.jsx';
import Adapter from 'enzyme-adapter-react-16';
import dummyData from './dummyData.js'

Enzyme.configure({ adapter: new Adapter() });

describe('tests for film info component', () => {
  test('check if renders', ()=>{
    const wrapper = shallow(<Filminfo film={dummyData}/>)
    expect(wrapper.exists()).toBe(true);
  });

  test('check if image source changes', () => {
    const wrapper = shallow(<Filminfo film={dummyData} />)
    expect(wrapper.find('.movieThumbnail').childAt(0).type()).toBe('img');
  });

  test('check if image source changes', () => {
    const wrapper = shallow(<Filminfo film={dummyData} />)
    expect(wrapper.find('.movieThumbnail').childAt(0).prop('src')).toBe(dummyData.movie_cover_url);
  });

});