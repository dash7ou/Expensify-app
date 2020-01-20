import moment from "moment";
import filtersReducer from "../../reducers/filters";


test("should setup the default filters value", ()=>{
    const state = filtersReducer(undefined, {type: "@@INIT"});
    expect(state).toEqual({
        text: "",
        sortBy: 'date',
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    })
})


test("should set sortBy to amount", ()=>{
    const state = filtersReducer(undefined, {type:'STOR_BY_AMOUNT'});
    expect(state.sortBy).toBe("amount")
})

test("should set sortBu to date", ()=>{
    const state = filtersReducer(undefined, 'STOR_BY_DATE');
    expect(state.sortBy).toBe("date")
})

test("should set text filter to text you enter it", ()=>{
    const state = filtersReducer(undefined, {type: "SET_TEXT_FILTER", text: "mohammed"});
    expect(state.text).toBe("mohammed")
})


test("should set start date filter", ()=>{
    const state = filtersReducer(undefined, {type: "SET_START_DATE", startDate: moment(0).valueOf()});
    expect(state.startDate).toBe(moment(0).valueOf())
})


test("should set end date filter", ()=>{
    const state = filtersReducer(undefined, {type: "SET_END_DATE", endDate: moment(0).valueOf()});
    expect(state.endDate).toBe(moment(0).valueOf())
})