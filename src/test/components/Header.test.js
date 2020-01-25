import React from 'react';
import { shallow } from "enzyme";
import { Header } from "../../components/Header";

test("should render header correctly", ()=>{
    const wrapper = shallow(<Header startLogout={()=>{}} />);
    expect(wrapper).toMatchSnapshot();
})


test('should start logout when button click', ()=>{
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
})


 
//! old test 
// import ReactShallowRenderer from "react-test-renderer/shallow";
// test("should render header correctly", ()=>{
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// });