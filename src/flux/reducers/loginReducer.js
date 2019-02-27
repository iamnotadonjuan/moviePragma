import { LOGIN_ACTION, INIT_SESSION } from "../actionTypes"
import update from 'immutability-helper'

const initialState = {
  user: {
    firstName: '',
    lastName: '',
    email: ''
  },
  isLogged: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION: {
      return update(state, {
        user: {
          firstName: { $set: action.payload.firstName },
          lastName: { $set: action.payload.lastName },
          email: { $set: action.payload.email }
        }
      })
    }
    case INIT_SESSION:
      return {
        ...state,
        isloader: true,
        idUser: action.payload.data.idUser
      }
    default:
      return state
  }
}