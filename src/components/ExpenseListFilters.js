import React from "react";
import {connect} from "react-redux";
import {setTextFilter,sortByAmount , sortByDate ,setStartDate, setEndDate} from "../actions/filters"
import { DateRangePicker } from "react-dates";


export class ExpenseListFilters extends React.Component{
    state = {
        focusedInput: null
    }
    
    onDateChange = ({startDate, endDate})=>{
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (focusedInput)=>{
        this.setState(()=>({focusedInput: focusedInput}))
    }

    onTextChange = (e)=>{
        return this.props.setTextFilter(e.target.value) //.text = e.target.value
    }

    onSortChange = (e)=>{
        if(e.target.value === 'date'){
            this.props.sortByDate()
        }else if(e.target.value === 'amount'){
            this.props.sortByAmount()
        }
    }

    render(){
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                            type="text"
                            placeholder="Search expenses"
                            className="text-input"
                            value ={this.props.filters.text}
                            onChange={this.onTextChange}/>
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.filters.sortBy} 
                            onChange={this.onSortChange}
                        >
                            <option value ="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate = {this.props.filters.startDate}
                            endDate = {this.props.filters.endDate}
                            onDatesChange = {this.onDateChange}
                            focusedInput = {this.state.focusedInput}
                            onFocusChange = {this.onFocusChange}
                            numberOfMonths = {1}
                            isOutsideRange = {()=>false}
                            showClearDates={true}
                        />
                    </div>
                </div>


            </div>
        )
    }
}

const mapStateToProps = ({filters})=>{
    return {
        filters
    }
}


const mapDispatchToProps = (dispatch)=>{
    return {
        setTextFilter: (value)=>dispatch(setTextFilter(value)),
        sortByDate: ()=> dispatch(sortByDate()),
        sortByAmount: ()=>dispatch(sortByAmount()),
        setStartDate: (startDate)=>dispatch(setStartDate(startDate)),
        setEndDate: (endDate)=>dispatch(setEndDate(endDate))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);