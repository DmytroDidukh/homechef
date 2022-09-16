import React from 'react';
import Select, { components, SingleValue } from 'react-select';
import { Link, useNavigate } from 'react-router-dom';

import { UserAvatar } from 'components/user-avatart/user-avatar.component';

import { useActions, useAppSelector } from 'store/hooks';
import { selectLanguage } from 'store/slices/app';
import { ROUTES, THEME } from 'constants/app';
import { TRANSLATIONS } from 'constants/translations';
import { typographyService } from 'services/typography-service';

import { SelectOption, CurrentUserInterface } from 'typescript/interfaces';
import { LANGUAGE_ENUM } from 'typescript/enums';

import styles from './profile-menu.module.scss';

interface ProfileMenuInterface {
    user: CurrentUserInterface;
}

const SIGN_OUT_VALUE = 'signOut';
const OPTIONS = [
    {
        label: {
            [LANGUAGE_ENUM.UKRAINIAN]: TRANSLATIONS.UK.HEADER.PROFILE_MENU.PROFILE,
            [LANGUAGE_ENUM.ENGLISH]: TRANSLATIONS.EN.HEADER.PROFILE_MENU.PROFILE,
        },
        value: ROUTES.PROFILE,
    },
    {
        label: {
            [LANGUAGE_ENUM.UKRAINIAN]: TRANSLATIONS.UK.HEADER.PROFILE_MENU.FAVORITES,
            [LANGUAGE_ENUM.ENGLISH]: TRANSLATIONS.EN.HEADER.PROFILE_MENU.FAVORITES,
        },
        value: ROUTES.FAVORITES,
    },
    {
        label: {
            [LANGUAGE_ENUM.UKRAINIAN]: TRANSLATIONS.UK.HEADER.PROFILE_MENU.SHOPPING_LIST,
            [LANGUAGE_ENUM.ENGLISH]: TRANSLATIONS.EN.HEADER.PROFILE_MENU.SHOPPING_LIST,
        },
        value: ROUTES.SHOPPING_LIST,
    },
    {
        label: {
            [LANGUAGE_ENUM.UKRAINIAN]: TRANSLATIONS.UK.HEADER.PROFILE_MENU.SIGN_OUT,
            [LANGUAGE_ENUM.ENGLISH]: TRANSLATIONS.EN.HEADER.PROFILE_MENU.SIGN_OUT,
        },
        value: SIGN_OUT_VALUE,
    },
];

export const ProfileMenu: React.FC<ProfileMenuInterface> = ({ user }): JSX.Element => {
    const { signOut } = useActions();
    const navigate = useNavigate();

    const language = useAppSelector(selectLanguage);

    const onMenuOptionClick = (option: SingleValue<SelectOption>) => {
        switch (option?.value) {
            case ROUTES.PROFILE: {
                navigate(ROUTES.PROFILE);
                break;
            }
            case ROUTES.SHOPPING_LIST: {
                navigate(ROUTES.SHOPPING_LIST);
                break;
            }
            case ROUTES.FAVORITES: {
                navigate(ROUTES.FAVORITES);
                break;
            }
            case SIGN_OUT_VALUE: {
                signOut();
                break;
            }
            default:
                break;
        }
    };

    return (
        <div className={styles.root}>
            <Select
                options={OPTIONS}
                className={styles.select}
                components={{
                    ValueContainer: (props) => (
                        <components.ValueContainer {...props}>
                            <UserAvatar photoURL={user.photoURL || ''} />
                            {props.children}
                        </components.ValueContainer>
                    ),
                    IndicatorsContainer: () => null,
                    Placeholder: () => null,
                    Option: (props) => {
                        const _label = typographyService.toUpperCaseAll(props.data.label[language]);

                        return (
                            <components.Option {...props}>
                                {props.data.value === SIGN_OUT_VALUE ? (
                                    <>{_label}</>
                                ) : (
                                    <Link className={styles.option} to={props.data.value}>
                                        {_label}
                                    </Link>
                                )}
                            </components.Option>
                        );
                    },
                    SingleValue: () => null,
                }}
                // @ts-ignore
                onChange={onMenuOptionClick}
                isSearchable={false}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                        ...theme.colors,
                        primary: THEME.PRIMARY,
                    },
                })}
            />
        </div>
    );
};
