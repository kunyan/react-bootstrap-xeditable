import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import EditableTextField from '../src/EditableTextField';

test('render EditableTextField and click', t => {
  const wrapper = shallow(<EditableTextField name="test" onUpdate={() => {}}/>);
  t.is(wrapper.find('a.editable').length, 1);
  wrapper.find('a.editable').simulate('click');
  t.is(wrapper.find('input').length, 1);
});
