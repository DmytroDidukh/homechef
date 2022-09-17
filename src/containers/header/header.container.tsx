import React, { useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { resolvePath } from 'react-router';
import classNames from 'classnames';

import { ProfileMenu } from 'containers/profile-menu/profile-menu.container';
import { SignInModal } from 'containers/sign-in-modal/sign-in-modal.container';
import { LanguageSwitch } from 'containers/language-switch/language-switch.container';
import { PageContainer } from 'components/page-container/page-container.component';
import { TextDivider } from 'components/text-divider/text-divider.component';
import { Button } from 'components/button/button.component';
import { Typography } from 'components/typography/typography.component';

import FavoritesIcon from 'icons/favorites.svg';
import BookmarkIcon from 'icons/bookmark.svg';

import { useActions, useAppSelector } from 'store/hooks';
import { selectCategoriesList, selectSubcategoriesList } from 'store/slices/categories';
import { categoriesFactory } from 'factory/category';
import { useAuth } from 'hooks/useAuth';
import { useTranslation } from 'hooks/useTranslation';
import { CLOUD_IMAGES, ROUTES } from 'constants/app';
import { TRANSLATION_KEYS } from 'translations/keys';
import { typographyService } from 'services/typography-service';

import {
    BUTTON_STYLE_ENUM,
    TYPOGRAPHY_STYLE_ENUM,
    TYPOGRAPHY_VARIANT_ENUM,
} from 'typescript/enums';

import styles from './header.module.scss';

export const Header: React.FC = (): JSX.Element => {
    const { authenticated, user } = useAuth();
    const { getMessage } = useTranslation();
    const { getCategories, getSubcategories } = useActions();

    const categories = useAppSelector(selectCategoriesList);
    const subcategories = useAppSelector(selectSubcategoriesList);

    const navigate = useNavigate();

    useEffect(() => {
        getCategories();
        getSubcategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const categoriesWithSubcategories = useMemo(() => {
        return categoriesFactory(categories, subcategories);
    }, [categories, subcategories]);

    return (
        <header className={styles.root}>
            <PageContainer className={styles.container}>
                <div className={styles.nav}>
                    <Link to={ROUTES.HOME} className={classNames(styles.logo, styles.link)}>
                        <img
                            src={CLOUD_IMAGES.LOGO_50x50}
                            alt="homechef logo"
                            width={50}
                            height={50}
                        />
                        <Typography
                            className={styles.logoTitle}
                            value="homechef"
                            variant={TYPOGRAPHY_VARIANT_ENUM.HEADING_1}
                            style={TYPOGRAPHY_STYLE_ENUM.LOWER_CASE_ALL}
                        />
                    </Link>

                    <div className={styles.recipes}>
                        <Typography
                            translate
                            className={styles.title}
                            value={TRANSLATION_KEYS.NAV.RECIPES}
                            variant={TYPOGRAPHY_VARIANT_ENUM.HEADING_2}
                            style={TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_ALL}
                        />
                        <ul className={styles.categories}>
                            {categoriesWithSubcategories.map((category) => (
                                <li key={category.id}>
                                    <Link
                                        to={`/${resolvePath(category.id, ROUTES.RECIPES).pathname}`}
                                    >
                                        {category.name_uk.toUpperCase()}
                                    </Link>

                                    {!!category.subcategories?.length && (
                                        <>
                                            <ul className={styles.subcategories}>
                                                {category.subcategories.map((subcategory) => (
                                                    <li key={subcategory.id}>
                                                        <Link
                                                            to={`/${
                                                                resolvePath(
                                                                    subcategory.id,
                                                                    ROUTES.RECIPES,
                                                                ).pathname
                                                            }`}
                                                        >
                                                            {subcategory.name_uk.toUpperCase()}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>

                                            <span className={styles.triangle} />
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={styles.nav}>
                    <LanguageSwitch />

                    {authenticated && (
                        <>
                            <Button
                                label={TRANSLATION_KEYS.HEADER.ADD_RECIPE}
                                style={BUTTON_STYLE_ENUM.PRIMARY}
                                onClick={() =>
                                    navigate(resolvePath(ROUTES.RECIPE_NEW, ROUTES.RECIPES))
                                }
                            />
                            <TextDivider />
                            <Link
                                title={typographyService.toUpperCaseAll(
                                    getMessage({ messageKey: TRANSLATION_KEYS.NAV.FAVORITES }),
                                )}
                                to={ROUTES.FAVORITES}
                                className={styles.link}
                            >
                                <img src={FavoritesIcon} alt="Favorites" />
                            </Link>
                            <Link
                                title={typographyService.toUpperCaseAll(
                                    getMessage({ messageKey: TRANSLATION_KEYS.NAV.SAVED }),
                                )}
                                to={ROUTES.BOOKMARKS}
                                className={styles.link}
                            >
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
