import { Auth, GoogleAuthProvider as BaseGoogleAuthProvider } from '@firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { UserDtoType } from '../typescript/types/auth';

export interface AuthApiInterface {
    googleSignIn(): Promise<UserDtoType | string>;
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

            const credential = GoogleAuthProvider.credentialFromResult(response);
            // @ts-ignore
            const token = credential.accessToken;
            // The signed-in user info.
            const user = response.user;

            console.log('USER: ', user);
            console.log('TOKEN: ', token);

            return {
                id: 1,
                email: 'string',
                fullName: 'string',
                createdAt: 'string',
                token: 'string',
            };
        } catch (err) {
            console.log('error: ', err);

            return 'error';
        }
    }
}
