import {login , logout} from "../../actions/auth";

test('should setup login action object', ()=>{
    const uid = 'dklasjflkajlfkjaslkj';
    const obj = login(uid);
    expect(obj).toEqual({
        type: 'LOGIN',
        uid
    })
})


test('should setup logout action object', ()=>{
    const obj = logout()
    expect(obj).toEqual({
        type: 'LOGOUT'
    })
})