import {addExpense , removeExpense, editExpense} from "../../actions/expenses";

test("should setup remove expense action object", ()=>{
    const action  =removeExpense({id: "123"});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123"
    })
})


test("should setup update expense action object",()=>{
    const newData = {description: "morad"}
    const action = editExpense("123", newData);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: "123",
        newData:{
            description: "morad"
        }
    }) 
})

test("should setup add expense with provided values", ()=>{
    const newData = {
        id: "1",
        description: "morad is here bitch",
        amount: 10,
        note:"noor is good girl",
        createdAt: 1000
    }

    const action = addExpense(newData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: newData 
    })
})




// test("should setup add expense with the default values",()=>{
//     const action = addExpense();
//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense:{
//             description: '',
//             amount:0,
//             createdAt: 0,
//             note:'',
//             id: expect.any(String)
//         }
//     })
// })