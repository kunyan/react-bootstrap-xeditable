import 'jest';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import renderer from 'react-test-renderer';
import EditableSelect from '../src/EditableSelect';

const options = [
  {
    text: 'China',
    value: 'CN'
  },
  {
    text: 'India',
    value: 'IN'
  }
];

it('renders correctly', () => {
  const tree = renderer.create(<EditableSelect name="test" options={options} value="IN" onSave={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Render EditableSelect and Click it', () => {
  const wrapper = mount(<EditableSelect name="test" options={options} onSave={() => {}} />);
  wrapper.find('a').simulate('click');
  expect(toJSON(wrapper)).toMatchSnapshot();
});
