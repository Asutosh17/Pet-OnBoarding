import {combineReducers} from "redux"
import petsReducers from './reducer'

const rootReducer = combineReducers({
    data: petsReducers,
})


export default rootReducer