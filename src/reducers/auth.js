export default (state = {}, action)=>{
    switch(action.type){
        case 'LOGIN':
            return{
                id: action.uid
            }
        case 'LOGOUT':
            return {}
        default:
            return state
    }
}