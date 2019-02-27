import { LOGIN_ACTION, INIT_SESSION } from '../actionTypes'

const login = (data) => {
  return dispatch => {
    dispatch(_login(user))
  }
}

const _login = (data) => {
  return {
    type: LOGIN_ACTION,
    paylod: { data }
  }
}

const initSession = data => {
    return dispatch => {
      dispatch(_initSession(data))
    }
}

const _initSession = (data) => {
  return {
    type: INIT_SESSION,
    payload: { data }
  }
}

export { login, initSession }