import { INIT_SESSION } from '../actionTypes'
import {
  AsyncStorage
} from 'react-native'

export const initSession = data => {
  return async dispatch => {
    try {
      console.log(data)
      await AsyncStorage.setItem('loggedIn', data.toString())
      dispatch(_initSession(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const getSession = async () => {
  try {
    return await AsyncStorage.getItem('loggedIn')
  } catch (error) {
    console.log(error)
  }
}

const _initSession = (data) => {
  return {
    type: INIT_SESSION,
    payload: { data }
  }
}
