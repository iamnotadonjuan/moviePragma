import { INIT_FAVORITE, SAVE_RATING } from "../actionTypes";
import update from 'immutability-helper'


const initialState = {
  favorite: [
    {
      star_1: false,
      star_2: false,
      star_3: false,
      star_4: false,
      star_5: false
    }
  ]
}
export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_FAVORITE:
      return {
        ...state,
        favorite: action.payload.data
      }
    case SAVE_RATING:
      const position = action.payload.data.position
      return update(state, {
        favorite: {
          [0]: {
            [position]: { $set: !action.payload.data.value }
          }
        }
      })
    default:
      return state
  }
}