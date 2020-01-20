import React from 'react';
import { shallow }from "enzyme";
import Header from "../../components/Header";

test("should render header correctly", ()=>{
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
})





 
//! old test 
// import ReactShallowRenderer from "react-test-renderer/shallow";
// test("should render header correctly", ()=>{
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// });