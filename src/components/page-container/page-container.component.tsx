import React from 'react';
import classNames from 'classnames';

import styles from './page-container.module.scss';

interface UserAvatarInterface {
    children: React.ReactNode;
    className?: string;
}

export const PageContainer: React.FC<UserAvatarInterface> = ({
    className,
    children,
}): JSX.Element => {
    return <section className={classNames(styles.root, className)}>{children}</section>;
};
