import React from 'react';
import classNames from 'classnames';

import { BUTTON_STYLE_ENUM, COMPONENTS_SIZE_ENUM } from 'typescript/enums/common';

import styles from './button.module.scss';

export interface ButtonProps {
    style?: BUTTON_STYLE_ENUM;
    size?: COMPONENTS_SIZE_ENUM;
    label: string;
    border?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    style = BUTTON_STYLE_ENUM.PRIMARY,
    size = COMPONENTS_SIZE_ENUM.MEDIUM,
    label,
    border = true,
    children,
    ...props
}) => {
    return (
        <button
            type="button"
            className={classNames(styles.root, styles[size], styles[style], {
                [styles.borderless]: !border,
            })}
            {...props}
        >
            {children ? children : label}
        </button>
    );
};
