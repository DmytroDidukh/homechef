import React from 'react';

import { ProfileMenu } from 'containers/profile-menu/profile-menu.container';
import { SignInModal } from 'containers/sign-in-modal/sign-in-modal.container';
import { PageContainer } from 'components/page-container/page-container.component';

import { useAuth } from 'hooks/useAuth';

import styles from './header.module.scss';

export const Header: React.FC = (): JSX.Element => {
    const { authenticated, user } = useAuth();

    return (
        <header className={styles.root}>
            <PageContainer className={styles.container}>
                <h1 className={styles.logo}>homechef</h1>
                {authenticated && <ProfileMenu user={user} />}
                {authenticated === false && <SignInModal />}
            </PageContainer>
        </header>
    );
};
