import React from 'react';
import { shallow } from 'enzyme';
import UserInput from './UserInput';

describe('<UserInput />', () => {
  it('renders the button text correctly', () => {
    const buttonText = 'Show cards';
    const wrapper = shallow(<UserInput text={buttonText} />);
    expect(wrapper.find('button').text()).toEqual(buttonText);
  });

  it('should update the value when the input changes', () => {
    const wrapper = shallow(<UserInput />);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'new value' } });
    expect(input.props().value).toEqual('new value');
  });
});
