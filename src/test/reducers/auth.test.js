import authReducer from "../../reducers/auth";


test("should setup the default value", ()=>{
    const state = authReducer(undefined, {type: 'INIT'});
    expect(state).toEqual({});
});

test("should login and return id", ()=>{
    const action = {
        type: 'LOGIN',
        uid: 'djashfkjahkjfahkjh'
    }

    const state = authReducer({}, action);
    expect(state).toEqual({
        id: action.uid
    })
});

test("should logout and return empty object", ()=>{
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({}, action);
    expect(state).toEqual({})
})