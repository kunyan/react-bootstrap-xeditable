import 'jest';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import renderer from 'react-test-renderer';
import EditableTextArea from '../src/EditableTextArea';

it('renders correctly', () => {
  const tree = renderer.create(<EditableTextArea name="test" value="Hello world" onSave={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Render EditableTextArea and Click it', () => {
  const wrapper = mount(<EditableTextArea name="test" value="Hello world" onSave={() => {}} />);
  wrapper.find('a').simulate('click');
  expect(toJSON(wrapper)).toMatchSnapshot();
});
