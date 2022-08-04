import { CurrentUserType, FirebaseUser } from 'typescript/types';

export const currentUserFactory = (user: FirebaseUser): CurrentUserType => {
    return {
        id: user.uid,
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL,
        admin: false,
        recipes: [],
        favorites: [],
        bookmarks: [],
        notes: [],
    };
};
