import React from "react";
import{ shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import moment from "moment";

// data
const expenses = [
    {
        id: "1",
        description: "dash",
        amount: 100,
        createdAt: 0,
        note: ""
    },
    {
        id: "2",
        description: "hadeel",
        amount: 2000,
        createdAt: moment(0).subtract(4,"days").valueOf(),
        note: ""
    },
    {
        id: "3", 
        description: "shimaa",
        amount: 50,
        createdAt: moment(0).add(4,"days").valueOf(),
        note: ""
    }
]

let onSubmit, history, wrapper;

beforeEach(()=>{
    onSubmit = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>);
})

test("should render AddExpensePage correctly", ()=>{
    expect(wrapper).toMatchSnapshot()
})

test("should handel onSubmit", ()=>{
    wrapper.find('ExpenseForm').prop("onSubmit")(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1])
})