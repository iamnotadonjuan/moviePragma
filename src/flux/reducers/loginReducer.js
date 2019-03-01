import { INIT_SESSION } from '../actionTypes'

const initialState = {
  isLogged: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_SESSION:
      return {
        ...state,
        isloader: action.payload.data
      }
    default:
      return state
  }
}