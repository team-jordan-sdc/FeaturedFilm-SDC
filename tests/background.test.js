import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import backgroundImage from '../client/src/component/background.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('enzyme test of background', () => {
  test('renders', ()=>{
    const wrapper = shallow(<backgroundImage />)
    expect(wrapper.exists()).toBe(true);
  })
})