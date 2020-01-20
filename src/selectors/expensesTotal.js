const getExpensesTotal = (expenses)=>{
    if(!expenses || expenses.length === 0) return 0;

    return expenses.reduce((acc, item)=>{
        return acc += item.amount; 
    }, 0)
};

export default getExpensesTotal;