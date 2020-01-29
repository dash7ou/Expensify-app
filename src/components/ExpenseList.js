import React from "react";
import {connect} from "react-redux";
import ExpenseItem from "./ExpenseListItems";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = (props)=>(
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        {props.expenses.map(expense => <ExpenseItem key ={expense.id}  {...expense}/>)}
    </div>
)


const mapStateToProps = ({expenses, filters})=>{
    return {
        expenses: selectExpenses(expenses , filters),
        filters
    }
}


export default connect(mapStateToProps)(ExpenseList); 