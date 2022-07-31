import React from 'react';
import classNames from 'classnames';

import { SPINNER_SIZE_ENUM, SPINNER_STYLE_ENUM } from 'typescript/enums/common';

import styles from './spinner.module.scss';

export interface SpinnerProps {
    className?: string;
    style?: SPINNER_STYLE_ENUM;
    size?: SPINNER_SIZE_ENUM;
}

export const Spinner: React.FC<SpinnerProps> = ({
    className,
    style = SPINNER_STYLE_ENUM.PRIMARY,
    size = SPINNER_SIZE_ENUM.SMALL,
}): JSX.Element => {
    return (
        <div className={styles.root}>
            <div className={classNames(styles.spinner, styles[size], styles[style], className)} />
        </div>
    );
};
