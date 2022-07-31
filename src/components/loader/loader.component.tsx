import React from 'react';
import classNames from 'classnames';

import { LOADER_SIZE_ENUM, LOADER_STYLE_ENUM } from 'typescript/enums/common';

import styles from './loader.module.scss';

export interface SpinnerProps {
    className?: string;
    style?: LOADER_STYLE_ENUM;
    size?: LOADER_SIZE_ENUM;
}

export const Loader: React.FC<SpinnerProps> = ({
    className,
    style = LOADER_STYLE_ENUM.PRIMARY,
    size = LOADER_SIZE_ENUM.SMALL,
}): JSX.Element => {
    return (
        <div className={styles.root}>
            <div className={classNames(styles.loader, styles[size], styles[style], className)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};
