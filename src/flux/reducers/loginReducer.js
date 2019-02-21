import { LOGIN_ACTION } from "../actionTypes";

const initialState = {
    userName : null,
    surName : null,
    age : null
}

export default (state=initialState, action) => {
    switch(action.type){
        case LOGIN_ACTION : 
            return {
                ...state,
                userName : action.data.userName,
                surName : action.data.surName,
                age : action.data.age
            }
        default :
            return state
    }
}