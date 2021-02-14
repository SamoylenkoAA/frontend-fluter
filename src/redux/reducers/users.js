import {FETCH_USERS, ADD_USER, UPDATE_FORM, CURRENTUSER, SHOW_DETAILS, SORT_USER, SEARCH_USER} from "../constants";
import {formRender} from '../form';

const initialState = {
    users: [],
    filterUsers: [],
    user: {},
    formControls: formRender(),
    isFormValid: false,
    currentPage: 1,
    usersPerPage: 10,
    numberOfButtons: 10,
    showDetails: false,
}

export const user = (state = initialState, action) => {
    switch (action.type){
        case FETCH_USERS:
            return {...state, users: action.payload, filterUsers: action.payload}
        case ADD_USER:
            let addUser= {
                id: state.users.reduce((maxId, todo) => Math.max(todo.id, maxId), 0) + 1,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email:  action.payload.email,
                phone:  action.payload.phone,
                address: {
                    streetAddress: '',
                    city: '',
                    state: '',
                    zip: ''
                },
                description: '',
            }
            state.users.unshift(addUser)
            return {...state, formControls: formRender(), isFormValid: false }
        case UPDATE_FORM:
            return {
                ...state,
                isFormValid: action.payload.isFormValid,
                formControls: action.payload.formControls
            }
        case SEARCH_USER:
            let text = action.payload
            let users = state.users

            return {...state, filterUsers: filterOnArray({users, text}), currentPage: 1}
        case CURRENTUSER:
            return {...state, currentPage: action.payload}
        case SHOW_DETAILS:
            return {...state, showDetails: action.payload.bool, user: action.payload.user}
        case SORT_USER:
            const type = action.payload.type
            const direction = action.payload.directionSort
            let sortUsers

            if(direction){
                sortUsers = state.filterUsers.sort((a, b) => {
                    return a[type] > b[type] ? 1 : -1
                })
            }else {
                sortUsers = state.filterUsers.sort((a, b) => {
                    return a[type] > b[type] ? -1 : 1
                })
            }
            return {...state, filterUsers: sortUsers}
        default:
            return state
    }
}

function filterOnArray(params){
    const {users, text} = params;
    if(!text){
        return users
    }
    return users.filter(user => {
        return user['firstName'].toLowerCase().includes(text.toLowerCase()) ||
               user['lastName'].toLowerCase().includes(text.toLowerCase()) ||
               user['email'].toLowerCase().includes(text.toLowerCase()) ||
               user['phone'].toLowerCase().includes(text.toLowerCase())
    })
}
