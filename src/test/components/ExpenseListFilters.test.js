import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import moment from "moment";

const filters = {
    text: '',
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
}

const altFilters = {
    test: '',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, "days")
}

let setTextFilter, sortByDate, sortByAmount , setStartDate, setEndDate, wrapper;

beforeEach(()=>{
    setTextFilter= jest.fn();
    sortByDate= jest.fn();
    sortByAmount= jest.fn();
    setStartDate= jest.fn();
    setEndDate= jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    ) 
});

test("should render ExpenseListFilters correctly", ()=>{
    expect(wrapper).toMatchSnapshot();
});

test("should render expenseListFilters with alt data correctly",()=>{
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
});

test("should handle text change", ()=>{
    const value= "mo";
    wrapper.find("input").simulate("change", {
        target:{
            value
        }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith("mo")
})

test("should sort by date", ()=>{
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find("select").simulate("change", {
        target:{
            value: "date"
        }
    })
    expect(sortByDate).toHaveBeenCalled()
});

test("should sort by amount", ()=>{
    wrapper.find("select").simulate("change", {
        target:{
            value: "amount"
        }
    })
    expect(sortByAmount).toHaveBeenCalled()
});

test("should handel date changes", ()=>{
    const startDate = moment(0).add(4, "years");
    const endDate = moment(0).add(8, "years");
    wrapper.find("DateRangePicker").prop("onDatesChange")({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
});

test("should handel date focus change", ()=>{
    const focusedInput= "endDate";
    wrapper.find("DateRangePicker").prop("onFocusChange")(focusedInput);
    expect(wrapper.state("focusedInput")).toBe(focusedInput);
});