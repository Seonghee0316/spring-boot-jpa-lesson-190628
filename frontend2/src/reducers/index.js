import {combineReducers} from 'redux'
import todoReducer from './todoReducers.js'

const shopApp = combineReducers(
    {
        todoReducer
    }
)

export default shopApp