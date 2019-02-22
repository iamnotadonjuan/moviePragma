import { LOGIN_ACTION, INIT_SESSION } from "../actionTypes";

const initialState = {
  userName: null,
  idUser: null,
  surName: null,
  age: null,
  isloader: null
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
    console.log(action.payload.data.idUser)
      return {
        ...state,
        isloader: true,
        idUser: action.payload.data.idUser
      }
    default:
      return state
  }
}