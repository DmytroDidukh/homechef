import React from 'react';

import styles from './home.module.scss';

export const Home: React.FC = (): JSX.Element => {
    return (
        <div className={styles.root}>
            <h1>Home</h1>
        </div>
    );
};
