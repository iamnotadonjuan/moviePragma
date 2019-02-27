import { combineReducers } from 'redux';
import loginReducer from './loginReducer'
import homeReducer from './homeReducer'
import menuReducer from './menuReducer'

export default combineReducers( {
    login : loginReducer,
    home: homeReducer,
    menu: menuReducer
})