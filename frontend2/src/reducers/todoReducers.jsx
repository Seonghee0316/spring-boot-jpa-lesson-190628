import {combineReducers} from 'redux';  //구조분해 함.
const todos = (state = {list:[]}, action)=>{
    switch(action.type){
        case ADD_TODO:
            console.log('ADD_TODO')
        default:
            return state
    }
    return state
}
export default todos;
