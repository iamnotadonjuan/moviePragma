import { CLOSE_MENU } from '../actionTypes'

const closeMenu =  (data) => {
  return async dispatch => {
    dispatch(_closeMenu(data))
  }
}

const _closeMenu = (data) => {
  return {
    type: CLOSE_MENU,
    payload: { data }
  }
}


export { closeMenu }