import * as actionTypes from '../constants/actionTypes';

export const login = (data)=> {
    return {
        type: actionTypes.USER_LOGIN,
        data
    }
};

export const update = (data)=>{
    return {
        type: actionTypes.USER_LOGIN_OUT,
        data
    }
};

export const loginOut = ()=>{
    return {
        type: actionTypes.USER_LOGIN_OUT,
        data: {}
    }
};