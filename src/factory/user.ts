import type { FirebaseUser } from 'typescript/types';
import { CurrentUserInterface } from 'typescript/interfaces';

export const currentUserFactory = (user: FirebaseUser): CurrentUserInterface => {
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
