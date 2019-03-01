import { SAVE_USER } from '../actionTypes'
import {
  AsyncStorage
} from 'react-native'

const saveUserInfo = (data) => {
  return async dispatch => {
    try {
      await AsyncStorage.setItem('currentUser', JSON.stringify(data))
      dispatch(_saveUserInfo(data))
    } catch (error) {
      console.log(error)
    }
  }
}

const retrieveUserInfo = async (data) => {
  try {
    return await AsyncStorage.getItem('currentUser')
  } catch (error) {
    console.log(error)
  }
}

const _saveUserInfo = (data) => {
  return {
    type: SAVE_USER,
    payload: { data }
  }
}

export { saveUserInfo, retrieveUserInfo }
