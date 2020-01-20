import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
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


let onSubmit, onRemove, history, wrapper;

beforeEach(()=>{
    onSubmit = jest.fn();
    onRemove = jest.fn();
    history= {
        push: jest.fn()
    };
    wrapper = shallow(<EditExpensePage onSubmit={onSubmit} onRemove={onRemove} history={history} expense={expenses[1]}/>);
})

test("should render EditExpensePage", ()=>{
    expect(wrapper).toMatchSnapshot();
})


test("should handel editExpense", ()=>{
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
})

test("should handel removeExpense", ()=>{
    wrapper.find("button").simulate("click");
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(onRemove).toHaveBeenLastCalledWith(expenses[1])
})