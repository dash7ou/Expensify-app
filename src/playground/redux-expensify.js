import {createStore , combineReducers} from "redux";
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({ description= '', note= '', amount= 0, createdAt= 0} = {})=>({
    type: 'ADD_EXPENSE',
    expense:{
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})
// REMOVE_EXPENSE
const removeExpense = ({id} = {})=>({
    type: 'REMOVE_EXPENSE',
    id
})
// EDIT_EXPENSE

const editExpense = (id , newData)=>({
    type: 'EDIT_EXPENSE',
    id,
    newData
})
// SET_TEXT_FILTER
const setTextFilter = (text)=>({
    type: 'SET_TEXT_FILTER',
    text
})
// STOR_BY_DATE
const sortByDate = ()=>({
    type: 'STOR_BY_DATE',
})
// STOR_BY_AMOUNT
const sortByAmount = ()=>({
    type: 'STOR_BY_AMOUNT',
})
// SET_START_DATE
const setStartDate = (startDate = undefined)=>({
    type: 'SET_START_DATE',
    startDate
})
// SET_END_DATE
const setEndDate = (endDate = undefined)=>({
    type:'SET_END_DATE',
    endDate
})


// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map(expense => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.newData
                    }
                }
                return expense
            })
        default:
            return state
    }
}

// Filter Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState , action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return{
                ...state,
                text: action.text
            }
        case 'STOR_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'STOR_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}

// Get visible expenses..
const getVisibleExpenses = (expenses , {text , sortBy, startDate , endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch= typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text);

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b)=>{
        if(sortBy === 'data'){
            return a.createdAt < b.createdAt ? 1 : -1
        }
        else if( sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }
    })
}

// Store creaction
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

store.subscribe(()=>{
    const state  = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({description: "morad",amount: 10, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description: "noor",amount: 100, createdAt: -2000}));
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

// store.dispatch(setTextFilter('noor'));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250))

const demoState = {
    expenses: [{
        id: 'kjdaslkfjljkja',
        description: "morad adham",
        note: "this is was finial payment for that address",
        amount: 54500,
        createdAt: 0
    }],
    filters:{
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}

