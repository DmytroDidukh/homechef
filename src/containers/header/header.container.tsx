import React from 'react';

import { ProfileMenu } from 'containers/profile-menu/profile-menu.container';
import { PageContainer } from 'components/page-container/page-container.component';
import { Button } from 'components/button/button.component';

import { useActions } from 'store/hooks';
import { useAuth } from 'hooks/useAuth';

import { BUTTON_STYLE_ENUM } from 'typescript/enums/common';

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
                        <Button label="sign in Google" onClick={signInWithGoogle} />
                        <Button
                            label="sign in Facebook"
                            style={BUTTON_STYLE_ENUM.PRIMARY_REVERSED}
                            onClick={signInWithFacebook}
                        />
                    </div>
                )}
            </PageContainer>
        </header>
    );
};
