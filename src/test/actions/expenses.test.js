import configMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {startAddExpense , addExpense , removeExpense, editExpense, setExpenses ,startSetExpenses, startRemoveExpense ,startEditExpense} from "../../actions/expenses";
import database from "../../firebase/firebase";
import moment from "moment";

//data
const expenses = [
    {
        id: "1",
        description: "dash",
        amount: 100,
        createdAt: 0,
        note: ""
    },
    {
        id: "2",
        description: "hadeel",
        amount: 2000,
        createdAt: moment(0).subtract(4,"days").valueOf(),
        note: ""
    },
    {
        id: "3", 
        description: "shimaa",
        amount: 50,
        createdAt: moment(0).add(4,"days").valueOf(),
        note: ""
    }
]

const uid = "thisisfuckingthings";
const defaultState = { auth: { id: uid}}
const createMockStore = configMockStore([thunk]);

beforeEach((done)=>{
    const expensesData = {};
    expenses.forEach(({id,description, amount, createdAt, note})=>{
        expensesData[id]= {description, amount, createdAt, note};
    });

    database.ref(`users/${uid}/expenses`).set(expensesData).then(()=>{
        done();
    })
})
test("should setup remove expense action object", ()=>{
    const action  =removeExpense({id: "123"});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123"
    })
})

test("should delete expense from firebase", (done)=>{
    const store = createMockStore(defaultState);
    store.dispatch(startRemoveExpense(expenses[0])).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: expenses[0].id
        })
        return database.ref(`users/${uid}/expenses/${expenses[0].id}`).once('value');
    }).then(snapshout=>{ 
        expect(snapshout.val()).toBeFalsy();
        done();
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

test('should edit expense in firebase', (done)=>{
    const store = createMockStore(defaultState)
    const newData = {
        description: 'you are bitch :/'
    }
    store.dispatch(startEditExpense(expenses[2].id, newData)).then(_=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id: expenses[2].id,
            newData
        })
        return database.ref(`users/${uid}/expenses/${expenses[2].id}`).once('value')
    }).then(snapshout =>{
        const data = snapshout.val();
        expect(data.description).toEqual(newData.description)
        done()
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
    const store = createMockStore(defaultState);
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

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshout)=>{
        expect(snapshout.val()).toEqual(data)
        done();
    })
});

test("should add expense with default to database and store it", (done)=>{
    const store = createMockStore(defaultState);
    const data = {
        description: "",
        amount: 0,
        note:"",
        createdAt: 0
    }

    store.dispatch(startAddExpense({})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...data
            }
        })

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshout)=>{
        expect(snapshout.val()).toEqual(data)
        done();
    })
})


test("should setup add expense action object with data", ()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test(" should fetching expenses from firebase", (done)=>{
    const store = createMockStore(defaultState);
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done();
    })
})


