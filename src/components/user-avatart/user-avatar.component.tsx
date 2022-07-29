import React from 'react';

import styles from './user-avatar.module.scss';

interface UserAvatarInterface {
    photoURL: string;
}

export const UserAvatar: React.FC<UserAvatarInterface> = ({ photoURL }): JSX.Element => {
    return <div style={{ backgroundImage: `url(${photoURL})` }} className={styles.root} />;
};
