import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import {editExpense , removeExpense} from "../actions/expenses"


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
                <ExpenseForm
                    expense = {this.props.expense}
                    onSubmit = { this.onSubmit }
                />
                <button onClick = { this.onRemove }
                >
                    Remove
                </button>
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
        onSubmit: (id, expense)=> dispatch(editExpense(id, expense)),
        onRemove: (propsExpense) => dispatch(removeExpense(propsExpense))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);