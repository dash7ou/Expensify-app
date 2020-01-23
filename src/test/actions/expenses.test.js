import configMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {startAddExpense , addExpense , removeExpense, editExpense} from "../../actions/expenses";
import database from "../../firebase/firebase";

const createMockStore = configMockStore([thunk]);

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
});

test("should add expense to database and store", (done)=>{
    const store = createMockStore({});
    const data = {
        description: "morad is here bitch",
        amount: 10,
        note:"noor is good girl",
        createdAt: 1000
    }

    store.dispatch(startAddExpense(data)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...data
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshout)=>{
        expect(snapshout.val()).toEqual(data)
        done();
    })
});





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