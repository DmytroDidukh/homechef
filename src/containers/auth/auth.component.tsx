import React, { useEffect } from 'react';

import styles from './auth.module.scss';
import { useActions, useAppSelector } from '../../store/hooks';
import { selectUserData } from '../../store/slices/auth';

export const Auth: React.FC = (): JSX.Element => {
    const { signInWithGoogle, getData } = useActions();

    const userData = useAppSelector(selectUserData);

    useEffect(() => {
        getData();
    }, [getData]);

    const handleSignIn = () => {
        signInWithGoogle();
    };

    return (
        <div className={styles.root}>
            <button onClick={handleSignIn}>signin</button>
            <p>{JSON.stringify(userData)}</p>
        </div>
    );
};
