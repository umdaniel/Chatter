import { userConstants } from './constants';

// Firebase import.
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const getRealTimeUsers = (uid) => {

    return async (dispatch) => {

        dispatch({ type: `${userConstants.GET_REALTIME_USERS}_REQUEST` });

        const db = firebase.firestore();
        const unsubscribe = db.collection('users')
        .onSnapshot((querySnapshot) => {
            const users = [];
            querySnapshot.forEach(function(doc) {

                if (doc.data().uid != uid) {
                    users.push(doc.data());
                }
            });
            //console.log(users);
            dispatch({ type: `${userConstants.GET_REALTIME_USERS}_SUCCESS`,
            payload: { users }
        });
        });

        return unsubscribe;
    }
}