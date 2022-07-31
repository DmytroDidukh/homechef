import React from 'react';

import styles from './user-avatar.module.scss';

interface UserAvatarInterface {
    photoURL: string;
}

export const UserAvatar: React.FC<UserAvatarInterface> = ({ photoURL }): JSX.Element => {
    return (
        <div
            style={{
                backgroundImage: `url(${
                    photoURL ||
                    'https://res.cloudinary.com/d-didukh/image/upload/v1659278094/homechef/user_g7miac.png'
                })`,
            }}
            className={styles.root}
        />
    );
};
