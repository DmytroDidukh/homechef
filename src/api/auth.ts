import { GoogleAuthProvider, FacebookAuthProvider, UserCredential } from '@firebase/auth';
import { signInWithPopup, signOut } from 'firebase/auth';
import { getDoc, doc, setDoc } from 'firebase/firestore';

import { usersCollection, auth } from './index';

import { CurrentUserInterface } from 'typescript/interfaces';

export interface AuthApiInterface {
    googleSignIn(): Promise<UserCredential>;
    facebookSignIn(): Promise<UserCredential>;
    signOut(): Promise<void>;
    getUser(data: CurrentUserInterface): Promise<CurrentUserInterface | null>;
    addUser(data: CurrentUserInterface): Promise<void>;
}

export class AuthApi implements AuthApiInterface {
    private googleAuthProvider = new GoogleAuthProvider();
    private facebookAuthProvider = new FacebookAuthProvider();

    googleSignIn() {
        return signInWithPopup(auth, this.googleAuthProvider);
    }

    facebookSignIn() {
        return signInWithPopup(auth, this.facebookAuthProvider);
    }

    signOut() {
        return signOut(auth);
    }

    async getUser(data: CurrentUserInterface) {
        const docRef = doc(usersCollection, data.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            return null;
        }
    }

    async addUser(data: CurrentUserInterface) {
        const docRef = doc(usersCollection, data.id);

        await setDoc(docRef, data);
    }
}
