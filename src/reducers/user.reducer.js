import { userConstants } from "../actions/constants"

const iniState = {
    users: []
}

export default (state = iniState, action) => {

    switch(action.type) {
        case `${userConstants.GET_REALTIME_USERS}_REQUEST`:
            break;
        case `${userConstants.GET_REALTIME_USERS}_SUCCESS`:
            state = {
                ...state,
                users: action.payload.users
            }
            break;
    }

    return state;
}