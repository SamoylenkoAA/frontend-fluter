import {
    FETCH_USERS,
    HIDE_LOADER,
    CURRENTUSER,
    SHOW_LOADER,
    SHOW_DETAILS,
    SORT_USER,
    ADD_USER,
    UPDATE_FORM,
    SEARCH_USER
} from "../constants";

export function showLoader(){
    return {
        type: SHOW_LOADER,
    }
}
export function hideLoader(){
    return {
        type: HIDE_LOADER,
    }
}
export function showDetails(user){
    return {
        type: SHOW_DETAILS,
        payload: user
    }
}
export function fetchUser(url){
    return async dispatch => {
        dispatch(showLoader())
        const response = await fetch(url)
        const json = await response.json()
        dispatch({type: FETCH_USERS, payload: json})
        dispatch(hideLoader())
    }
}
export function addUser(params){
    return {
        type: ADD_USER,
        payload: params
    }
}
export function updateForm(params){
    return {
        type: UPDATE_FORM,
        payload: params
    }
}
export function searchUser(params){
    return {
        type: SEARCH_USER,
        payload: params
    }
}
export function handlerCurrentUser(number){
    return {
        type: CURRENTUSER,
        payload: number
    }
}
export function sortUsers(type){
    return {
        type: SORT_USER,
        payload: type
    }
}