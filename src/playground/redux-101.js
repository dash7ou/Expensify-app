import { createStore } from "redux";


// Action generators - function that return action objects

const incrementCount = ({incrementBy = 1} = {})=> ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {})=>({
    type: 'DECREMENT',
    decrementBy
})


const setCount = ({count = 0} = {})=>({
    type: 'SET',
    count
})

const resetCount = ()=>({
    type: 'REST'
})

// Reducers
// 1. Reducers are pure functions
// 2. never change state or action


const countReducer = (state = {count: 0}, action)=>{ // create store
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count+ action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'REST':
            return {
                count: 0
            }
        default:
            return state
    }
}

const store = createStore(countReducer);


const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
})


// Actions - than an object get sent to the store 

// increment the count

// store.dispatch({
//     type: 'INCREMENT' 
// });

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

//! Function calll to test our work
store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}))
store.dispatch(setCount())
store.dispatch(setCount({count: 10}))
store.dispatch(resetCount())


console.log(store.getState()); // get the state in redux
