const getExpensesTotal = (expenses = [])=>{
    return expenses.reduce((acc, item)=>{
        return acc += item.amount; 
    }, 0)
};

export default getExpensesTotal;