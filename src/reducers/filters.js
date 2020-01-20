import moment from "moment";

// Filter Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf("month"),
    endDate: moment().endOf('month')
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



export default filtersReducer;