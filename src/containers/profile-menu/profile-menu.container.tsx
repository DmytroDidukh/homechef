import React from 'react';
import Select, { components, SingleValue } from 'react-select';
import { Link, useNavigate } from 'react-router-dom';

import { UserAvatar } from 'components/user-avatart/user-avatar.component';

import { useActions } from 'store/hooks';
import { ROUTES, THEME } from 'constants/app';

import { SelectOption, CurrentUserInterface } from 'typescript/interfaces';

import styles from './profile-menu.module.scss';

interface ProfileMenuInterface {
    user: CurrentUserInterface;
}

const SIGN_OUT_VALUE = 'signOut';
const OPTIONS = [
    { label: 'ПРОФІЛЬ', value: ROUTES.PROFILE },
    { label: 'ОБРАНІ РЕЦЕПТИ', value: ROUTES.FAVORITES },
    { label: 'СПИСОК ПОКУПОК', value: ROUTES.SHOPPING_LIST },
    { label: 'ВИЙТИ', value: SIGN_OUT_VALUE },
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
                    Option: (props) => (
                        <components.Option {...props}>
                            {props.data.value === SIGN_OUT_VALUE ? (
                                <>{props.data.label}</>
                            ) : (
                                <Link className={styles.option} to={props.data.value}>
                                    {props.data.label}
                                </Link>
                            )}
                        </components.Option>
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
