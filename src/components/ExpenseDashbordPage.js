import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpenseSummary from "./ExpensesSummary";

const ExpenseDashbordPage = ()=>(
    <div>
        <ExpenseSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default ExpenseDashbordPage;