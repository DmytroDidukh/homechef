import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { Firestore } from '@firebase/firestore';
/* eslint-disable */

import {
    GoogleAuthProvider,
    getAuth,
    signInWithCredential,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import { AuthApi, AuthApiInterface } from './auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASURMENT_ID,
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

interface ApiInterface {
    auth: AuthApiInterface;
}

class Api implements ApiInterface {
    public auth;
    constructor() {
        this.auth = new AuthApi(auth);
    }
}

export const api = new Api();

// export const signInCred = () => {
//     const credential = GoogleAuthProvider.credential(token);
//
//     return signInWithCredential(auth, credential)
//       .then(data => {
//           console.log(data);
//       })
//       .catch((error) => {
//           // Handle Errors here.
//           const errorCode = error.code;
//           const errorMessage = error.message;
//
//           console.log(errorMessage);
//           // The email of the user's account used.
//           const email = error.email;
//           // The credential that was used.
//           const credential = GoogleAuthProvider.credentialFromError(error);
//           // ...
//       });
// };

export { db, app };
