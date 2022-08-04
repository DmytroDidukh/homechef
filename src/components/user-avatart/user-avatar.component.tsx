import React from 'react';

import { CLOUD_IMAGES } from 'constants/app';

import styles from './user-avatar.module.scss';

interface UserAvatarInterface {
    photoURL: string;
}

export const UserAvatar: React.FC<UserAvatarInterface> = ({ photoURL }): JSX.Element => {
    return (
        <div
            style={{
                backgroundImage: `url(${photoURL || CLOUD_IMAGES.USER_PLACEHOLDER})`,
            }}
            className={styles.root}
        />
    );
};
