import React from "react";
import {connect} from "react-redux";
import ExpenseItem from "./ExpenseListItems";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = (props)=>(
    <div>
        <h1>Expense List</h1>
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