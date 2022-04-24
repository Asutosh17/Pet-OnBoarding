import * as types from './actionType'
import axios from 'axios'

const getPets = (pets) => ({
    type: types.GET_PETS,
    payload: pets
})


const dataAdded = () => ({
    type: types.ADD_DATA
}) 


const getData = (pet) => ({
    type: types.GET_SINGLE_DATA,
    payload: pet
})

export const loadPets = () => {
    return function (dispatch){
        axios.get("http://localhost:8080/listing")
        .then((res) => {
            console.log(res)
            dispatch(getPets(res.data))
        })
        .catch((err) => console.log(err))
    }
}


export const addData = (data) => {
    return function (dispatch){
        axios.post(`http://localhost:8080/listing`, data)
        .then((res) => {
            console.log(res)
            dispatch(dataAdded())
            dispatch(loadPets())
        })
        .catch((err) => console.log(err))
    }
}

export const getSingleData = (id) => {
    return function (dispatch){
        axios.get(`http://localhost:8080/listing/${id}`)
        .then((res) => {
            console.log(res)
            dispatch(getData(res.data))
        })
        .catch((err) => console.log(err))
    }
}