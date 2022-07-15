import React from 'react';

import { useActions } from 'store/hooks';
import { useAuth } from 'hooks/useAuth';

import styles from './header.module.scss';

export const Header: React.FC = (): JSX.Element => {
    const { authenticated, user } = useAuth();
    const { signInWithGoogle } = useActions();

    const handleSignIn = () => {
        signInWithGoogle();
    };

    return (
        <div className={styles.root}>
            {authenticated === false && <button onClick={handleSignIn}>signin</button>}
            {authenticated && <p>{user.displayName}</p>}
        </div>
    );
};
