import React from 'react';
import classNames from 'classnames';

import styles from './error-message.module.scss';

export interface ErrorMessageProps {
    className?: string;
    message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ className, message }): JSX.Element => {
    return <span className={classNames(styles.root, className)}>{message}</span>;
};
