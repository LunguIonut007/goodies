import React from 'react'
import { shallow } from 'enzyme'
import YeomanImage from 'core/YeomanImage'

describe('<YeomanImage />', function () {
  it('should render an image tag', function () {
    const component = shallow(<YeomanImage />)
    expect(component.find('img').length).to.equal(1)
  })
})
