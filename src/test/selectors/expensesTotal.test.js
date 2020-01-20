import getExpensesTotal from "../../selectors/expensesTotal";
import moment from "moment";

const singleExpense = [
    {
        id: "2",
        description: "hadeel",
        amount: 2000,
        createdAt: moment(0).subtract(4,"days").valueOf(),
        note: ""
    }
]
const multiExpenses = [
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


test("should return 0 if no expenses", ()=>{
    const total = getExpensesTotal();
    expect(total).toBe(0);
});

test("should correctly add one expense", ()=>{
    const total = getExpensesTotal(singleExpense);
    expect(total).toBe(2000)
})

test("should correctly add multiple expenses", ()=>{
    const total = getExpensesTotal(multiExpenses);
    expect(total).toBe(2150)
})