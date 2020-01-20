import expensesReducer from "../../reducers/expenses";
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


test("should setup the default value", ()=>{
    const state = expensesReducer(undefined, {type: 'INIT'});
    expect(state).toEqual([]);
});

test("test remove expense by id", ()=>{
    const actions = {
        type: "REMOVE_EXPENSE",
        id: expenses[0].id
    }
    const state = expensesReducer(expenses , actions);
    expect(state).toEqual([expenses[1], expenses[2]])
})

test("should not remove expense if not found the id", ()=>{
    const actions = {
        type: "REMOVE_EXPENSE",
        id: "ksdjfhak"
    }
    const state = expensesReducer(expenses , actions);
    expect(state).toEqual(expenses)
})

test("should add an expense", ()=>{
    const actions = {
        type: "ADD_EXPENSE",
        expense:{
            id: "3",
            description: "noor",
            amount: 2000,
            createdAt: moment(0).subtract(4,"days").valueOf(),
            note: ""
        }
    }
    const state = expensesReducer(expenses , actions);
    expect(state).toEqual([...expenses, actions.expense])
})

test("should edit an expense", ()=>{
    const actions = {
        type: "EDIT_EXPENSE",
        id: "1",
        newData: {
            description: "morgan"
        }
    }

    const state = expensesReducer(expenses,actions);
    expect(state[0].description).toBe("morgan")
})