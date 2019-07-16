import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PurchaseButtons from '../client/src/component/purchaseButtons.jsx';
import dummyData from './dummyData.js';

Enzyme.configure({ adapter: new Adapter() });

describe('tests for purchase button component', () => {
  test('check if buttons renders', () => {
    const wrapper = mount(<PurchaseButtons film={dummyData} />);
    expect(wrapper.exists()).toBe(true);
  });

  test('test initial prices', () => {
    const wrapper = mount(<PurchaseButtons film={dummyData} />);
    expect(wrapper.find('RentPrice').text()).toEqual('$0.03');
    expect(wrapper.find('OwnPrice').text()).toEqual('$5.31');
  });

  test('test dropdown menu open when mouse is over, and close when leaves', () => {
    const wrapper = mount(<PurchaseButtons film={dummyData} />);
    expect(wrapper.exists('RentExpanded')).toBe(false);
    wrapper.find('RentListenZone').simulate('mouseenter');
    expect(wrapper.exists('RentExpanded')).toBe(true);
    wrapper.find('RentListenZone').simulate('mouseleave');
    expect(wrapper.exists('RentExpanded')).toBe(false);
  });
});
