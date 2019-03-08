import { CLOSE_MENU } from "../actionTypes"

const initialState = {
   isOpen : false
  }

  export default (state = initialState, action) => {
    switch (action.type) {
        case CLOSE_MENU:
        return {
            ...state,
            isOpen : !action.payload.data
          }

        default:
            return state
    }
}