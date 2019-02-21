import { LOGIN_ACTION, INIT_SESSION } from '../actionTypes'

const login = data => {
  let user = {
    userName: 'israel',
    surName: 'tarazona',
    age: 28
  }
  return dispatch => {
    dispatch(_login(user))
  }
}

const _login = (data) => {
  return {
    type: LOGIN_ACTION,
    data
  }
}

const initSession = data => {
  return {
    type: INIT_SESSION,
    data
  }
}


export { login, initSession }