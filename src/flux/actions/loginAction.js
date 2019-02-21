import { LOGIN_ACTION } from '../actionTypes'

const login = data => {
  let user = {
    userName= 'israel',
    surName= 'tarazona',
    age=28
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


export { login }