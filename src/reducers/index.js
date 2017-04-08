import userReducer from './user_info_reducer'
import {combineReducers} from 'redux'

//here we are combining our reducer this may help you have multiple reducers
const allReducer = combineReducers({
    userInfo: userReducer
})

export default allReducer