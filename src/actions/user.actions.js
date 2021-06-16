import { userConstants } from './constants';
// Fix the firestore import.
import { firestore } from 'firebase';

export const getRealTimeUsers = () => {

    return async (dispatch) => {

        dispatch({ type: `${userConstants.GET_REALTIME_USERS}_REQUEST` });
    }
}