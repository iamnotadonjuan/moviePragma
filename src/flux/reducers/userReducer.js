import { SAVE_USER } from "../actionTypes"

const initialState = {
  user: {
    uuid: '',
    displayName: '',
    email: ''
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        user: action.payload.user
      }
    default:
      return state
  }
}