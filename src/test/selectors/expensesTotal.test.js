import getExpensesTotal from "../../selectors/expensesTotal";

test("should return 0 if no expenses", ()=>{
    const total = getExpensesTotal();
    expect(total).toBe(0);
})