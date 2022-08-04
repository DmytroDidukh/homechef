import { initializeApp, FirebaseApp } from 'firebase/app';
import { Firestore } from '@firebase/firestore';
import { getFirestore, CollectionReference, collection, DocumentData } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import { AuthApi, AuthApiInterface } from './auth';
import { IngredientsApi, IngredientsApiInterface } from './ingredients';

import type { CurrentUserType } from 'typescript/types';

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

export const auth = getAuth(app);

interface ApiInterface {
    auth: AuthApiInterface;
    ingredients: IngredientsApiInterface;
}

const createCollection = <T = DocumentData>(collectionName: string) => {
    return collection(db, collectionName) as CollectionReference<T>;
};

export const usersCollection = createCollection<CurrentUserType>('users');

class Api implements ApiInterface {
    public auth;
    public ingredients;

    constructor() {
        this.auth = new AuthApi();
        this.ingredients = new IngredientsApi();
    }
}

const api = new Api();

export { db, app, api };
