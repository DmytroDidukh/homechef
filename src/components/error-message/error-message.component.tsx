import React from 'react';
import classNames from 'classnames';

import { Typography } from 'components/typography/typography.component';

import { TYPOGRAPHY_STYLE_ENUM, TYPOGRAPHY_VARIANT_ENUM } from 'typescript/enums';

import styles from './error-message.module.scss';

export interface ErrorMessageProps {
    className?: string;
    message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ className, message }): JSX.Element => {
    return (
        <Typography
            className={classNames(styles.root, className)}
            style={TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_ALL}
            variant={TYPOGRAPHY_VARIANT_ENUM.TEXT}
            value={message}
        />
    );
};
