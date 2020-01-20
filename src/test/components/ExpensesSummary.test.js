import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";


test("should correctly render ExpensesSummary with one expnese", ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={253}/>)
    expect(wrapper).toMatchSnapshot();
})

test("should correctly render ExpenesesSummary with multiple expenses", ()=>{
    const wrapper = shallow(<ExpensesSummary expensesTotal={1000} expenseCount={5}/>);
    expect(wrapper).toMatchSnapshot();

})