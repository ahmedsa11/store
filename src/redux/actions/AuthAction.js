
import { InsertData } from '../../Hooks/InsertData';
import {UPDATE_USER_PASSWORD,UPDATE_USER_PROFILE, CREATE_NEW_USER,RESET_PASSWORD,VERIFY_PASSWORD, FOREGT_PASSWORD, GET_CURERNT_USER, LOGIN_USER } from '../type'
import { InsUpdateData } from '../../Hooks/UpdataData';
import { GetDataToken } from '../../Hooks/getAllData';
//create new user 
export const createNewUser = (data) => async (dispatch) => {
    try {
        const response = await InsertData (`/api/v1/auth/signup`, data);
        dispatch({
            type: CREATE_NEW_USER,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: CREATE_NEW_USER,
            payload: e.response,
        })
    }
}

//login  user 
export const loginUser = (data) => async (dispatch) => {
    try {
        const response = await InsertData(`/api/v1/auth/login`, data);
        dispatch({
            type: LOGIN_USER,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: LOGIN_USER,
            payload: e.response,
        })
    }
}

//login  user 
export const getLoggedUser = () => async (dispatch) => {
    try {
        const response = await GetDataToken(`/api/v1/users/getMe`);
        dispatch({
            type: GET_CURERNT_USER,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_CURERNT_USER,
            payload: e.response,
        })
    }
}

export const forgetPassword = (data) => async (dispatch) => {
    try {
        const response = await InsertData(`/api/v1/auth/forgotPasswords`, data);
        dispatch({
            type: FOREGT_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: FOREGT_PASSWORD,
            payload: e.response,
        })
    }
}


//2-verify  passwrod 
export const verifyPassword = (data) => async (dispatch) => {
    try {
        const response = await InsertData(`/api/v1/auth/verifyResetCode`, data);
        dispatch({
            type: VERIFY_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: VERIFY_PASSWORD,
            payload: e.response,
        })
    }
}


//2-reset  passwrod 
export const resetPassword = (data) => async (dispatch) => {
    try {
        const response = await InsUpdateData(`/api/v1/auth/resetPassword`, data);
        dispatch({
            type: RESET_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: RESET_PASSWORD,
            payload: e.response,
        })
    }
}


//update  user data 
export const updateUserProfileData = (body) => async (dispatch) => {
    try {
        const response = await InsUpdateData(`/api/v1/users/updateMe`, body);
        console.log(response)
        dispatch({
            type: UPDATE_USER_PROFILE,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: UPDATE_USER_PROFILE,
            payload: e.response,
        })
    }
}


//update  user password
export const updateUserPassword = (body) => async (dispatch) => {
    try {
        const response = await InsUpdateData(`/api/v1/users/changeMyPassword`, body);
        console.log(response)
        dispatch({
            type: UPDATE_USER_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: UPDATE_USER_PASSWORD,
            payload: e.response,
        })
    }
}