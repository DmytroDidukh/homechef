import React from 'react';

import { ProfileMenu } from 'containers/profile-menu/profile-menu.container';
import { PageContainer } from 'components/page-container/page-container.component';

import { useActions } from 'store/hooks';
import { useAuth } from 'hooks/useAuth';

import styles from './header.module.scss';

export const Header: React.FC = (): JSX.Element => {
    const { authenticated, user } = useAuth();
    const { signInWithGoogle, signInWithFacebook } = useActions();

    return (
        <header className={styles.root}>
            <PageContainer className={styles.container}>
                <h1 className={styles.logo}>homechef</h1>
                {authenticated && <ProfileMenu user={user} />}
                {authenticated === false && (
                    <div>
                        <button onClick={signInWithGoogle}>signin Google</button>
                        <button onClick={signInWithFacebook}>signin Facebook</button>
                    </div>
                )}
            </PageContainer>
        </header>
    );
};
