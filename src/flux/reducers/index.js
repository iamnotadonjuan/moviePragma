import { combineReducers } from 'redux';
import loginReducer from './loginReducer'
import homeReducer from './homeReducer'
import menuReducer from './menuReducer'
import detailReducer from './detailReducer'

export default combineReducers( {
    login : loginReducer,
    home: homeReducer,
    menu: menuReducer,
    detail: detailReducer
})