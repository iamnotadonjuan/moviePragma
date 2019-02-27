import { CLOSE_MENU } from "../actionTypes"


const initialState = {
   isOpen : false
  }

  export default (state = initialState, action) => {
    switch (action.type) {
        case CLOSE_MENU:
        console.log(action)
        return {
            ...state,
            isOpen : action.payload.data.isOpen
          }

        default:
            return state
    }
}