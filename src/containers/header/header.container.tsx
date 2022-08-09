import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { resolvePath } from 'react-router';

import { ProfileMenu } from 'containers/profile-menu/profile-menu.container';
import { SignInModal } from 'containers/sign-in-modal/sign-in-modal.container';
import { PageContainer } from 'components/page-container/page-container.component';
import { TextDivider } from 'components/text-divider/text-divider.component';
import { Button } from 'components/button/button.component';

import FavoritesIcon from 'icons/favorites.svg';
import BookmarkIcon from 'icons/bookmark.svg';

import { useActions, useAppSelector } from 'store/hooks';
import { selectCategoriesList } from 'store/slices/categories';
import { useAuth } from 'hooks/useAuth';
import { ROUTES } from 'constants/app';

import { BUTTON_STYLE_ENUM } from 'typescript/enums/common';

import styles from './header.module.scss';

export const Header: React.FC = (): JSX.Element => {
    const { authenticated, user } = useAuth();
    const { getCategories } = useActions();

    const categories = useAppSelector(selectCategoriesList);

    const navigate = useNavigate();

    useEffect(() => {
        getCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <header className={styles.root}>
            <PageContainer className={styles.container}>
                <div className={styles.nav}>
                    <Link to={ROUTES.HOME} className={styles.link}>
                        <h1 className={styles.logo}>homechef</h1>
                    </Link>

                    <div className={styles.recipes}>
                        <span className={styles.title}>РЕЦЕПТИ</span>
                        <ul className={styles.categories}>
                            {categories.map((category) => (
                                <li key={category.id}>
                                    <Link
                                        to={`/${resolvePath(category.id, ROUTES.RECIPES).pathname}`}
                                    >
                                        {category.name_uk.toUpperCase()}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={styles.nav}>
                    {authenticated && (
                        <>
                            <Button
                                label="ДОДАТИ РЕЦЕПТ"
                                style={BUTTON_STYLE_ENUM.PRIMARY}
                                onClick={() =>
                                    navigate(resolvePath(ROUTES.RECIPE_NEW, ROUTES.RECIPES))
                                }
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
