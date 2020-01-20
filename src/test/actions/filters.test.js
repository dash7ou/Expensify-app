import {
    setTextFilter,
    setEndDate,
    setStartDate,
    sortByAmount,
    sortByDate
} from "../../actions/filters"

test("should generate set text filter object",()=>{
    const action = setTextFilter("mo");
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: "mo" 
    });
});

test("should generate set start date object",()=>{
    const action = setStartDate(20);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: 20
    })
})

test("should generate set end date object",()=>{
    const action = setEndDate(50);
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: 50
    })
})


test("should generate sort by amount object",()=>{
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'STOR_BY_AMOUNT',
    })
})

test("should generate sort by date object",()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: 'STOR_BY_DATE',
    })
})