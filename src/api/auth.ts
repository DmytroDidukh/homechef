import { Auth, GoogleAuthProvider, FacebookAuthProvider, UserCredential } from '@firebase/auth';
import { signInWithPopup, signOut } from 'firebase/auth';

export interface AuthApiInterface {
    googleSignIn(): Promise<UserCredential>;
    facebookSignIn(): Promise<UserCredential>;
    signOut(): Promise<void>;
}

export class AuthApi implements AuthApiInterface {
    private auth: Auth;
    private googleAuthProvider = new GoogleAuthProvider();
    private facebookAuthProvider = new FacebookAuthProvider();

    constructor(auth: Auth) {
        this.auth = auth;
    }

    googleSignIn() {
        return signInWithPopup(this.auth, this.googleAuthProvider);
    }

    facebookSignIn() {
        return signInWithPopup(this.auth, this.facebookAuthProvider);
    }

    signOut() {
        return signOut(this.auth);
    }
}
