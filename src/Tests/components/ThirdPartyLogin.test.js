import React from 'react'
import {shallow} from 'enzyme'
import {ThirdPartyLogin} from '../../components/ThirdPartyLogin'

test('should render component correctly',()=>{
  const wrapper = shallow(<ThirdPartyLogin />)
  expect(wrapper).toMatchSnapshot()
})