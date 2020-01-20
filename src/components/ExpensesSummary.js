import React from "react";
import {connect} from "react-redux";
import numeral from "numeral";
import selectorExpense from "../selectors/expenses";
import selectorExpensesToal from "../selectors/expensesTotal";


export const ExpensesSummary = ({expenseCount, expensesTotal})=>{
    const expensesWord = expenseCount === 1 ? "expense" : "expenses";
    const amountFormat = numeral(expensesTotal/ 100).format("$0,0.00");
    
    return (    
        <div>
            <h1>veiwing {expenseCount} {expensesWord} totalling {amountFormat}</h1>
        </div>
    )
}
const mapStateToProps =(state)=> {
    const visibleExpenses = selectorExpense(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectorExpensesToal(visibleExpenses)
    }
}
export default connect(mapStateToProps)(ExpensesSummary);