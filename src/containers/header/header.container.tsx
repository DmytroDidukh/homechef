import React from 'react';

import { useActions } from 'store/hooks';
import { useAuth } from 'hooks/useAuth';

import styles from './header.module.scss';
import Select, { components } from 'react-select';

const Avatar = () => {
    return <div style={{ width: 40, height: 40, backgroundColor: '#fffaaa' }} />;
};

const ValueContainer = ({ children, ...props }) => (
    <components.ValueContainer {...props}>
        <Avatar />
        {children}
    </components.ValueContainer>
);

export const Header: React.FC = (): JSX.Element => {
    const { authenticated, user } = useAuth();
    const { signInWithGoogle, signInWithFacebook, signOut } = useActions();

    const foo = (props) => {
        console.log('OPEN: ', props);
    };
    const options = [
        { label: 'Profile', value: 'profile' },
        { label: 'Logout', value: 'logout' },
    ];

    const options2 = [
        { value: 'aa', label: 'Dmytro Didukh' },
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    return (
        <div className={styles.root}>
            <Select
              delimiter={false}
                options={options2}
                defaultValue={{ value: 'aa', label: 'Dmytro Didukh' }}
                components={{
                    ValueContainer,
                }}
              onChange={foo}
            />
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
