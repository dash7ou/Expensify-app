import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import {startEditExpense , startRemoveExpense} from "../actions/expenses"


export class EditExpensePage extends React.Component{
    onSubmit = (expense)=>{
        this.props.onSubmit(this.props.expense.id ,expense);
        this.props.history.push("/");
    }

    onRemove = ()=>{
        this.props.onRemove(this.props.expense);
        this.props.history.push("/");
    }

    render(){
        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">
                            Edit Expense
                        </h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense = {this.props.expense}
                        onSubmit = { this.onSubmit }
                    />
                    <button 
                        onClick = { this.onRemove }
                        className = "button button--create button--remove"
                    >
                        Remove
                    </button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state , props)=>{
    return {
        expense: state.expenses.find(expense => expense.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onSubmit: (id, expense)=> dispatch(startEditExpense(id, expense)),
        onRemove: (propsExpense) => dispatch(startRemoveExpense(propsExpense))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);