import { Auth, GoogleAuthProvider as BaseGoogleAuthProvider } from '@firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { CurrentUserType } from '../typescript/types/auth';
import { currentUserFactory } from 'factory/user';

export interface AuthApiInterface {
    googleSignIn(): Promise<CurrentUserType | string>;
}

export class AuthApi implements AuthApiInterface {
    private auth: Auth;
    private googleAuthProvider: any;

    constructor(auth: Auth) {
        this.auth = auth;
        this.googleAuthProvider = new BaseGoogleAuthProvider();
    }

    async googleSignIn() {
        try {
            const response = await signInWithPopup(this.auth, this.googleAuthProvider);

            // const credential = GoogleAuthProvider.credentialFromResult(response);
            // // @ts-ignore
            // const token = credential.accessToken;
            // The signed-in user info.

            return currentUserFactory(response.user);
        } catch (err) {
            console.log('error: ', err);

            return 'error';
        }
    }
}
