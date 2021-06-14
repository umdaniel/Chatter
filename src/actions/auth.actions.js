import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const signup = (user) => {
    return async (dispatch) => {

        const db = firebase.firestore();
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(user => {
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })
    }
}