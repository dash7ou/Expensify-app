import selectExpenses from "../../selectors/expenses";
import moment from "moment";

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

test("should filter expenses by text value",()=>{
    const filters = {
        text: "d",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
    }
    const filtersData = selectExpenses(expenses,filters);
    expect(filtersData).toEqual([expenses[0],expenses[1]])
})

test("should filter expense by startDate", ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const filtersData = selectExpenses(expenses, filters);
    expect(filtersData).toEqual([expenses[2], expenses[0]]);
})

test("should filter expense by endDate", ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, "days")
    }

    const filtersData = selectExpenses(expenses, filters);
    expect(filtersData).toEqual([expenses[0], expenses[1]])
})

test("should sort By date",()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const filtersData = selectExpenses(expenses, filters);
    expect(filtersData).toEqual([expenses[2], expenses[0], expenses[1]])
})

test("should sort By amount",()=>{
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const filtersData = selectExpenses(expenses, filters);
    expect(filtersData).toEqual([expenses[1], expenses[0], expenses[2]])
})