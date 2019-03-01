import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import homeReducer from './homeReducer'
import userReducer from './userReducer'

export default combineReducers( {
    login : loginReducer,
    home: homeReducer,
    user: userReducer
})