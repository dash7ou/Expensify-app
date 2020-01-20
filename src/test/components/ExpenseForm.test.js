import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import ExpenseForm from "../../components/ExpenseForm";


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

test("should render ExpenseForm correctly", ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with expense data", ()=>{
    const wrapper = shallow(<ExpenseForm expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
})

test("should render error for invalid form submission", ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find("form").simulate("submit",{
        preventDefault: ()=>{}
    })

    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot()
});

test("should set description on input change", ()=>{
    const value = "new description";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(0).simulate("change", {
        target: {value}
    });
    expect(wrapper.state("description")).toBe(value)
})

test("should set note on input change", ()=>{
    const value = "new note";
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find("textarea").simulate("change",{
        target: {value}
    });
    expect(wrapper.state("note")).toBe(value)
})

test("should set amount if valid input", ()=>{
    const value = "23.50";
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find("input").at(1).simulate("change",{
        target: {value}
    });
    expect(wrapper.state("amount")).toBe(value)
});

test("should not set amount if valid input", ()=>{
    const value = "23.550";
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find("input").at(1).simulate("change",{
        target: {value}
    });
    expect(wrapper.state("amount")).toBe("")
});



test("should call onSubmit prop for valid from submission",()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find("form").simulate("submit",{
        preventDefault: ()=>{}
    });

    expect(wrapper.state("error")).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        note: expenses[0].note,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt
    })

});

test("should set new date on date change",()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("SingleDatePicker").prop("onDateChange")(now);
    expect(wrapper.state("createdAt")).toBe(now)
})

test("should set focused on focused change", ()=>{
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("SingleDatePicker").prop("onFocusChange")({focused:true});
    expect(wrapper.state("focused")).toBe(true)
})