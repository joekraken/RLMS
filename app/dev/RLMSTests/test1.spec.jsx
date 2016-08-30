//put file in /RLMSTests

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { mount, shallow } from 'enzyme';
import Curriculum from '../RLMSCurriculum/index.jsx'

describe('<Curriculum/>', function () {
  it('should run', function () {
    const wrapper = mount(<Curriculum/>);
    expect(wrapper.state('test')).toEqual(100);

    // wrapper.props().data  - also an option
  });

  it('should find d1', function () {
    const wrapper = mount(<Curriculum/>);
    expect(wrapper.find('#d1').length).toEqual(1);
  });

it('should read text', function () {
    const wrapper = mount(<Curriculum/>);
    console.log(wrapper.text());
    //should have expect statement for test
  });

  it('should have lessons', ()=>{
    const wrapper = mount(<Curriculum/>);
    expect(wrapper.find('div').first().childAt(0).html()).toEqual('<h1>.NET</h1>');
  });

});

export default Tests

/*
example of simultating clicks
wrapper.find('a').simulate('click');
expect(wrapper.find('.clicks-1').length).to.equal(1);*/
