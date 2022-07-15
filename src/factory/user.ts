import { CurrentUserType, FirebaseUser } from 'typescript/types/auth';

export const currentUserFactory = (user: FirebaseUser): CurrentUserType => {
    return {
        id: user.uid,
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL,
    };
};
