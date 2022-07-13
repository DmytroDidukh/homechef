import React from 'react';

import styles from './app.module.scss';
import { Auth } from '../auth/auth.component';

export const App: React.FC = (): JSX.Element => {
    return (
        <div className={styles.root}>
            <Auth />
        </div>
    );
};
