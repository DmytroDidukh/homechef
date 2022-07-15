import { User } from '@firebase/auth';

export type FirebaseUser = User;

export type CurrentUserType = {
    id: string;
    email: string | null;
    emailVerified: boolean;
    displayName: string | null;
    photoURL: string | null;
};
