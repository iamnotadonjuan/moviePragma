import { LOGIN_ACTION, INIT_SESSION } from "../actionTypes";

const initialState = {
  userName: null,
  surName: null,
  age: null,
  isloader: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        ...state,
        userName: action.data.userName,
        surName: action.data.surName,
        age: action.data.age
      }
    case INIT_SESSION:
      return {
        ...state,
        isloader: true
      }
    default:
      return state
  }
}