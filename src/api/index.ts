import { initializeApp, FirebaseApp } from 'firebase/app';
import { Firestore } from '@firebase/firestore';
import {
    getFirestore,
    CollectionReference,
    collection,
    DocumentData,
    collectionGroup,
    query,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage, FirebaseStorage } from 'firebase/storage';

import { AuthApi, AuthApiInterface } from './auth';
import { IngredientsApi, IngredientsApiInterface } from './ingredients';
import { CategoriesApi, CategoriesApiInterface } from './categories';
import { MediaApi } from './media';

import {
    CategoryInterface,
    CurrentUserInterface,
    SubcategoryInterface,
} from 'typescript/interfaces';

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
const storage: FirebaseStorage = getStorage(app);

export const auth = getAuth(app);

const createCollection = <T = DocumentData>(collectionName: string) => {
    return collection(db, collectionName) as CollectionReference<T>;
};
const createSubCollection = <T = DocumentData>(collectionName: string) => {
    return query(collectionGroup(db, collectionName) as CollectionReference<T>);
};

/**
 * Typed firebase collections
 */
export const usersCollection = createCollection<CurrentUserInterface>('users');
export const categoriesCollection = createCollection<CategoryInterface>('categories');
export const subcategoriesCollection = createSubCollection<SubcategoryInterface>('subcategories');

/**
 * API
 */
interface ApiInterface {
    auth: AuthApiInterface;
    ingredients: IngredientsApiInterface;
    categories: CategoriesApiInterface;
}

class Api implements ApiInterface {
    public auth;
    public ingredients;
    public categories;
    public media;

    constructor() {
        this.auth = new AuthApi();
        this.ingredients = new IngredientsApi();
        this.categories = new CategoriesApi();
        this.media = new MediaApi();
    }
}

const api = new Api();

export { db, app, api, storage };
