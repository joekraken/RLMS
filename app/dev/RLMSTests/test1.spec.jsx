//put file in /RLMSTests
/*
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import { mount, shallow } from 'enzyme';
import Curriculum from '../RLMSCurriculum/index.jsx'
import jasmine from 'jasmine-ajax'

describe('make sure header appears', function () {
  
  it('should have lessons', ()=>{
    const wrapper = mount(<Curriculum/>);
    expect(1).toEqual(1);
  });

});


describe('test ajax calls', function () {

  
  it('should render syllabus correctly', ()=>{
    const wrapper = mount(<Curriculum/>);
    expect(1).toEqual(1);

  });

});
export default Tests
*/

import React from 'react';
import TestUtils from 'react-addons-test-utils';

import { mount, shallow } from 'enzyme';
import Curriculum from '../RLMSCurriculum/index.jsx'
import jasmine from 'jasmine-ajax'

describe('make sure header appears', function () {
  
  it('should have lessons', ()=>{
    const wrapper = mount(<Curriculum/>);
    expect(wrapper.find('div').first().childAt(0).html()).toEqual('<h1>You are not assigned to a batch!</h1>');
  });

});


describe('test ajax calls', function () {
       const wrapper = mount(<Curriculum/>);

  beforeEach(function() {
       //const wrapper = mount(<Curriculum/>);

      sessionStorage.setItem('batchName','0-0-Java');

    });
  
  it('should render syllabus correctly', ()=>{
     
     setTimeout(function(){
       expect(wrapper.find('h3').length).toEqual(1);
       expect(wrapper.find('h3').text()).toEqual('Week 1: Core');

    done(); // call this to finish off the it block
  }, 5000);
    //expect(wrapper.find('h3').length).toEqual(1);
   

    //var comp = <Curriculum />;
    //var DOM = TestUtils.renderIntoDocument(component);
    //var res = DOM.findRenderedComponentWithType(comp, <h3/> )

    //expect(res).not.toBeUndefined();

    //expect(wrapper.find('td').first().text()).toEqual('Java');
    //expect(wrapper.find('td').get(1).text()).toEqual('test');

  });

});
export default Tests
