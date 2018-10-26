import 'jest';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import renderer from 'react-test-renderer';
import EditableTextField from '../src/EditableTextField';

it('renders correctly', () => {
  const tree = renderer.create(<EditableTextField name="test" value="Hello world" onSave={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Render EditableTextField and Click it', () => {
  const wrapper = mount(<EditableTextField name="test" value="Hello world" onSave={() => {}} />);
  wrapper.find('a').simulate('click');
  expect(toJSON(wrapper)).toMatchSnapshot();
});
