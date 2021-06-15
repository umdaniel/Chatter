import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { authConstant } from './constants';

export const signup = (user) => {
    return async (dispatch) => {

        const db = firebase.firestore();

        dispatch({ type: `${authConstant.USER_LOGIN}_REQUEST`});

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(data => {
            console.log(data);

            const currentUSer = firebase.auth().currentUser;
            const name = `${user.firstName} ${user.lastName}`;

            currentUSer.updateProfile({
                displayName: name
            })
            .then(() => {
                // Update successful.
                db.collection('users').add({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    uid: data.user.uid,
                    createdAt: new Date()
                })
                .then(() => {
                    // Success.
                    const loggedInUser = {
                        firstName: user.firstName,
                        lastName: user.lastName,
                        uid: data.user.uid,
                        email: user.email
                    }

                    localStorage.setItem('user', JSON.stringify(loggedInUser));
                    console.log('USer logged in successfully.');

                    dispatch({
                        type: `${authConstant.USER_LOGIN}_SUCCESS`,
                        payload: { user: loggedInUser }
                    })
                })
                .catch(error => {
                    console.log(error);
                    dispatch({ type: `${authConstant.USER_LOGIN}_FAILURE`,
                    payload: { error }
                });
                });
            });
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const signin = (user) => {
    return async dispatch => {
        dispatch({ type: `${authConstant.USER_LOGIN}_REQUEST` });
        firebase.auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((data) => {
            console.log(data);

            const name = data.user.displayName;
            const firstName = name[0];
            const lastName = name[1];

            const loggedInUser = {
                firstName,
                lastName,
                uid: data.user.uid,
                email: data.user.email
            }
            localStorage.setItem('user', JSON.stringify(loggedInUser));

            dispatch({
                type: `${authConstant.USER_LOGIN}_SUCCESS`,
                payload: { user: loggedInUser }
            });
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: `${authConstant.USER_LOGIN}_FAIILURE`,
                payload: { error }
            })
        })
    }
}

export const isLoggedInUser = () => {
    return async dispatch => {

        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

        if (user) {
            dispatch({
                type: `${authConstant.USER_LOGIN}_SUCCESS`,
                payload: { user }
            });
        } else {
            dispatch({
                type: `${authConstant.USER_LOGIN}_FAILURE`,
                payload: { error: 'Login again please' }
            });
        }
    }
}