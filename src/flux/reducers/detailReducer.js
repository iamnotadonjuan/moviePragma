import { INIT_FAVORITE, SAVE_RATING, OPEN_MODAL } from "../actionTypes";
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
  ],
  isOpenModal:false,
  linkUpdate:[]
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
    case OPEN_MODAL:
      return update(state, {
        isOpenModal : {$set : !action.payload.data.isOpenModal},
        linkUpdate: {$set: action.payload.data.linkUpdate}
      })
    default:
      return state
  }
}