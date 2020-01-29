import React from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import numeral from "numeral";
import selectorExpense from "../selectors/expenses";
import selectorExpensesToal from "../selectors/expensesTotal";


export const ExpensesSummary = ({expenseCount, expensesTotal})=>{
    const expensesWord = expenseCount === 1 ? "expense" : "expenses";
    const amountFormat = numeral(expensesTotal/ 100).format("$0,0.00");
    
    return (    
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Veiwing <span>{expenseCount}</span> {expensesWord} totalling <span>{amountFormat}</span></h1>
                <div className="page-header__actions">
                    <Link className="button button--create" to="/create">Add Expense</Link>
                </div>
            </div>
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