import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieTitle from '../client/src/component/movieTitle.jsx';
import dummyData from './dummyData.js';

Enzyme.configure({ adapter: new Adapter() });

describe('tests for title component', () => {
  test('check if title renders', () => {
    const wrapper = shallow(<MovieTitle title={dummyData.title} />);
    expect(wrapper.exists()).toBe(true);
  });

  test('check if title changes', () => {
    const wrapper = shallow(<MovieTitle title={dummyData.title} />);
    expect(wrapper.find('.movieTitle').text()).toEqual('The Lord of the Rings: The Return of the King');
  });
});
