import React from "react";
import { shallow } from "enzyme";
import ExpenseListItems from "../../components/ExpenseListItems";

// data

const expenses = [
    {
        id: "1",
        description: "dash",
        amount: 1000,
        createdAt: 0,
        note: ""
    }
]

test("should render ExpenseListItems correctly", ()=>{
    const wrapper = shallow(<ExpenseListItems expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
})