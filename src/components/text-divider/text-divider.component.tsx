import React from 'react';
import classNames from 'classnames';

import styles from './text-divider.module.scss';

export interface TextDividerProps {
    backgroundColor?: string;
    className?: string;
}

export const TextDivider: React.FC<TextDividerProps> = ({
    backgroundColor,
    className,
    ...props
}) => {
    return (
        <span
            className={classNames(styles.root, className)}
            style={{ backgroundColor: backgroundColor }}
            {...props}
        />
    );
};
