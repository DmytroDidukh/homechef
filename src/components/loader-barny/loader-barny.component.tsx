import React from 'react';

import { CLOUD_IMAGES } from 'constants/app';

import styles from './loader-barny.module.scss';

export const LoaderBarny: React.FC = (): JSX.Element => {
    return (
        <div className={styles.root}>
            <img src={CLOUD_IMAGES.LOADING_BARNY} alt="Loading Barny" />
        </div>
    );
};
