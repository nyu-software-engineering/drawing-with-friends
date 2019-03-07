import React from 'react'
import { describe } from 'mocha'
import { expect } from 'chai'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from '../../src/components/Footer'

configure({ adapter: new Adapter() })

describe('Footer', function () {
  it('has the drawing with friends copyright symbol', function () {
    const wrapper = shallow(<Footer/>)
    expect(wrapper.find('span').text()).to.equal('© 2019 Drawing with Friends')
  })

  it('includes a link to the about us page', function () {
    const wrapper = shallow(<Footer/>)
    const aboutUsLink = <a className="grey-text text-lighten-4 right" href="#!">About Us</a>
    expect(wrapper.contains(aboutUsLink)).to.equal(true)
  })
})
