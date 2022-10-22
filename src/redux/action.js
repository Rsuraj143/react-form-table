import * as types from "./actionType"
import axios from "axios"

const getUsers = (users)=>({

    type : types.GET_USERS,
    payload : users,
});

const userDeleted = () =>({
    type : types.DELETE_USER
})

const userAdded = () =>({
    type : types.ADD_USER
})

const userUpdated = () =>({
    type : types.UPDATE_USER
})

const getUser = (user)=>({
    type : types.GET_SINGLE_USERS,
    payload: user,
});


export const loadUser = ()=>{
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}`)
        .then((Response)=>{
            console.log("res",Response)
            dispatch(getUsers(Response.data))
        })
        .catch((error)=>console.log(error))
    }

}

export const deleteUser = (id)=>{
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/${id}`)
        .then((Response)=>{
            console.log("res",Response);
            dispatch(userDeleted());
            dispatch(loadUser());
        })
        .catch((error)=>console.log(error))
    };

}

export const addUser = (user)=>{
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}`,user)
        .then((Response)=>{
            console.log("res",Response);
            dispatch(userAdded());
            // dispatch(loadUser());
        })
        .catch((error)=>console.log(error))
    };

}

export const getSingleUser = (id)=>{
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/${id}`)
        .then((Response)=>{
            console.log("res",Response);
            dispatch(getUser(Response.data));   
        })
        .catch((error)=>console.log(error))
    };

}

export const updateUser = (user,id)=>{
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API}/${id}`,user)
        .then((Response)=>{
            console.log("res",Response);
            dispatch(userUpdated());
            
        })
        .catch((error)=>console.log(error))
    };

}