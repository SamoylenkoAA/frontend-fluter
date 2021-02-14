import {combineReducers} from 'redux'
import {user} from './users'
import {spinner} from './spinner'

export const rootReducer = combineReducers({
    user,
    spinner
})