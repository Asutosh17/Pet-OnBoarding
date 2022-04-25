import * as types from './actionType'

const initialState = {
    pets: [],
    pet: {},
    loading: true
}


const petsReducers = (state = initialState, action) => {
        switch(action.type){
            case types.GET_PETS:
                return {
                    ...state,
                    pets: action.payload,
                    loading: false
                }
            case types.ADD_DATA:
                return {
                    ...state,
                    loading: false
                }
            case types.GET_SINGLE_DATA:
                return {
                    ...state,
                    pet: action.payload,
                    loading: false
                }
            default:
                return state
        }
}

export default petsReducers