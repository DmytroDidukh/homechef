import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ProfileMenu } from 'containers/profile-menu/profile-menu.container';
import { SignInModal } from 'containers/sign-in-modal/sign-in-modal.container';
import { PageContainer } from 'components/page-container/page-container.component';
import { TextDivider } from 'components/text-divider/text-divider.component';
import { Button } from 'components/button/button.component';

import FavoritesIcon from 'icons/favorites.svg';
import BookmarkIcon from 'icons/bookmark.svg';

import { useAuth } from 'hooks/useAuth';
import { ROUTES } from 'constants/app';

import { BUTTON_STYLE_ENUM } from 'typescript/enums/common';

import styles from './header.module.scss';

export const Header: React.FC = (): JSX.Element => {
    const { authenticated, user } = useAuth();
    const navigate = useNavigate();

    return (
        <header className={styles.root}>
            <PageContainer className={styles.container}>
                <Link to={ROUTES.HOME}>
                    <h1 className={styles.logo}>homechef</h1>
                </Link>

                <div className={styles.nav}>
                    {authenticated && (
                        <>
                            <Button
                                label="ДОДАТИ РЕЦЕПТ"
                                style={BUTTON_STYLE_ENUM.PRIMARY}
                                onClick={() => navigate(ROUTES.RECIPE_CREATOR)}
                            />
                            <TextDivider />
                            <Link title="УЛЮБЛЕНІ" to={ROUTES.FAVORITES} className={styles.link}>
                                <img src={FavoritesIcon} alt="Favorites" />
                            </Link>
                            <Link title="ЗБЕРЕЖЕНІ" to={ROUTES.BOOKMARKS} className={styles.link}>
                                <img src={BookmarkIcon} alt="Bookmark" />
                            </Link>
                            <TextDivider />
                            <ProfileMenu user={user} />
                        </>
                    )}
                    {authenticated === false && <SignInModal />}
                </div>
            </PageContainer>
        </header>
    );
};
