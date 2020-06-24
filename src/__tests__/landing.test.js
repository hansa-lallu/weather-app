import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('landing', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  
  it('does not render a welcome message', () => {
    const wrapper = shallow(<App />);
    const welcome = <h2>Welcome</h2>;
    expect(wrapper.contains(welcome)).toEqual(false);
  });


  describe('search box', () => {
    const wrapper = shallow(<App />);

    it('has a search box', () => {
      expect(wrapper.find('input.search-bar').prop('value')).toEqual("");
      expect(wrapper.find('input.search-bar').prop('type')).toEqual("text");
    });

    it('search field can be updated', () => {
      wrapper.find({ className: 'search-bar'}).simulate('change', { target: { id: 'search-bar', value: 'London'} });
      expect(wrapper.find({ className: 'search-bar'}).prop('value')).toEqual('London')
    });
  });
});


