
// SET_TEXT_FILTER
export const setTextFilter = (text)=>({
    type: 'SET_TEXT_FILTER',
    text
})
// STOR_BY_DATE
export const sortByDate = ()=>({
    type: 'STOR_BY_DATE',
})
// STOR_BY_AMOUNT
export const sortByAmount = ()=>({
    type: 'STOR_BY_AMOUNT',
})
// SET_START_DATE
export const setStartDate = (startDate = undefined)=>({
    type: 'SET_START_DATE',
    startDate
})
// SET_END_DATE
export const setEndDate = (endDate = undefined)=>({
    type:'SET_END_DATE',
    endDate
})
