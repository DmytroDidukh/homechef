import React from 'react';
import Select, { components, SingleValue } from 'react-select';

import { UserAvatar } from 'components/user-avatart/user-avatar.component';

import { useActions } from 'store/hooks';
import { useAuth } from 'hooks/useAuth';

import type { ValueContainerProps } from 'react-select/dist/declarations/src/components/containers';
import type { SelectOption } from 'typescript/interfaces/common';

import styles from './header.module.scss';

interface ValueContainerInterface extends ValueContainerProps {
    photoURL: string;
}

const ValueContainer: React.FC<ValueContainerInterface> = ({ children, photoURL, ...props }) => (
    <components.ValueContainer {...props}>
        <UserAvatar photoURL={photoURL} />
        {children}
    </components.ValueContainer>
);

export const Header: React.FC = (): JSX.Element => {
    const { authenticated, user } = useAuth();
    const { signInWithGoogle, signInWithFacebook, signOut } = useActions();

    const foo = (option: SingleValue<SelectOption>) => {
        console.log('OPEN: ', option);
    };
    const options = [
        { label: 'Profile', value: 'profile' },
        { label: 'Logout', value: 'logout' },
    ];

    // @ts-ignore
    return (
        <div className={styles.root}>
            {authenticated && (
                <div style={{ width: 50 }}>
                    <Select
                        options={options}
                        className={styles.select}
                        // defaultValue={{ value: 'aa', label: 'Dmytro Didukh' }}
                        components={{
                            ValueContainer: (props) => (
                                // @ts-ignore
                                <ValueContainer {...props} photoURL={user.photoURL || ''} />
                            ),
                            IndicatorsContainer: () => null,
                            Placeholder: () => null,
                            SingleValue: () => null,
                        }}
                        onChange={foo}
                        isSearchable={false}
                    />
                </div>
            )}

            {authenticated === false && (
                <div>
                    <button onClick={signInWithGoogle}>signin Google</button>
                    <button onClick={signInWithFacebook}>signin Facebook</button>
                </div>
            )}
            {authenticated && (
                <>
                    <p>{user.displayName}</p>
                    <button onClick={signOut}>signout</button>
                </>
            )}
        </div>
    );
};
