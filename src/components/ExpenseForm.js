import React from "react";
import moment from "moment";
import {SingleDatePicker} from "react-dates";

class ExpenseForm extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note: '',
            amount: props.expense? (props.expense.amount/100).toString() : "",
            createdAt: props.expense? moment(props.expense.createdAt):moment(),
            focused: false,
            error: undefined
        }
    }

    onDescriptionChange = (e)=>{
        const description = e.target.value;
        this.setState(()=>({description}));
    }
    onChangeNote = (e)=>{
        const note = e.target.value;
        this.setState(()=>({note}))
    }

    onChangeAmount = (e)=>{
        const amount = e.target.value;
        if(!amount || amount.match(/^\d+(\.\d{0,2})?$/)){
            this.setState(()=>({amount}))
        }
    }

    onDateChange = (createdAt)=>{
        if(createdAt){
            this.setState(()=>({createdAt}))
        }
    }

    onFocusChange = ({focused})=>{
        this.setState(()=>({focused}))
    }

    onSubmit = (e)=>{
        e.preventDefault();

        if(!this.state.description){
            return this.setState(()=>({error:"Add description please!"}))
        }

        if(!this.state.amount){
            return this.setState(()=>({error: "Add amount Please!"}))
        }

        this.setState(()=>({error: ""}))
        this.props.onSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10) * 100,
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note
        })
    }

    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input  
                        type="text" 
                        value={this.state.description} 
                        placeholder="description"
                        onChange={this.onDescriptionChange}
                        autoFocus
                    />
                    <input 
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onChangeAmount}
                    />
                    <SingleDatePicker
                        date = {this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused = {this.state.focused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths = {1}
                        isOutsideRange = {()=>false}
                    />
                    <textarea
                        placeholder="add a note for yout expense (optional)"
                        value = {this.state.note}
                        onChange = {this.onChangeNote}
                    ></textarea>
                    <button>{this.props.expense ? "Edit Expense":"Add Expense"}</button>
                </form>
            </div>
        )
    }
}


export default ExpenseForm;