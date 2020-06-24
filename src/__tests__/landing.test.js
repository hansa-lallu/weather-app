import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('landing', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  
  it('renders a welcome message', () => {
    const wrapper = shallow(<App />);
    const welcome = <h2>Welcome</h2>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });
});
