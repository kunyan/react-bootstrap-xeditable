import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import EditableTextArea from '../src/EditableTextArea';

test('render EditableTextArea and click', t => {
  const wrapper = shallow(<EditableTextArea name="test" onUpdate={() => {}}/>);
  t.is(wrapper.find('a.editable').length, 1);
  wrapper.find('a.editable').simulate('click');
  t.is(wrapper.find('textarea').length, 1);
});
