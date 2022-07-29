import React from 'react';
import Select, { components, SingleValue } from 'react-select';
import { useNavigate, Link } from 'react-router-dom';

import { UserAvatar } from 'components/user-avatart/user-avatar.component';

import { useActions } from 'store/hooks';
import { ROUTES, THEME } from 'constants/app';

import type { SelectOption } from 'typescript/interfaces/common';
import type { CurrentUserType } from 'typescript/types/auth';

import styles from './profile-menu.module.scss';

interface ProfileMenuInterface {
    user: CurrentUserType;
}

const SIGN_OUT_VALUE = 'signOut';
const OPTIONS = [
    { label: 'Профіль', value: ROUTES.PROFILE },
    { label: 'Обрані рецепти', value: ROUTES.FAVORITES },
    { label: 'Список покупок', value: ROUTES.SHOPPING_LIST },
    { label: 'Вийти', value: SIGN_OUT_VALUE },
];

export const ProfileMenu: React.FC<ProfileMenuInterface> = ({ user }): JSX.Element => {
    const { signOut } = useActions();
    const navigate = useNavigate();

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
                    Option: ({ data }) => (
                        <>
                            {data.value === SIGN_OUT_VALUE ? (
                                <div className={styles.option}>{data.label}</div>
                            ) : (
                                <Link className={styles.option} to={data.value}>
                                    {data.label}
                                </Link>
                            )}
                        </>
                    ),
                    SingleValue: () => null,
                }}
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
