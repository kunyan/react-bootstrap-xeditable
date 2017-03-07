import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import EditableSelect from '../src/EditableSelect';

test('render EditableSelect and click', t => {
  const options = [
    {
      text: 'China',
      value: 'CN'
    }, {
      text: 'India',
      value: 'IN'
    }
  ];
  const wrapper = shallow(<EditableSelect name="test" options={options} onUpdate={() => {}}/>);
  t.is(wrapper.find('a.editable').length, 1);
  wrapper.find('a.editable').simulate('click');
  t.is(wrapper.find('option').length, 2);
});
