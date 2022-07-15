import React from 'react';

import { useActions } from 'store/hooks';
import { useAuth } from 'hooks/useAuth';

import styles from './header.module.scss';

export const Header: React.FC = (): JSX.Element => {
    const { authenticated, user } = useAuth();
    const { signInWithGoogle, signInWithFacebook, signOut } = useActions();

    return (
        <div className={styles.root}>
            {authenticated === false && (
                <div>
                    <button onClick={signInWithGoogle}>signin Google</button>
                    <button onClick={signInWithFacebook}>signin Facebook</button>
                </div>
            )}
            {authenticated && (
                <>
                    <p>{user.displayName}</p>
                    <button onClick={signOut}>signout</button>
                </>
            )}
        </div>
    );
};
