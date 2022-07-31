import React from 'react';
import classNames from 'classnames';

import { BUTTON_STYLE_ENUM, COMPONENTS_SIZE_ENUM } from 'typescript/enums/common';

import styles from './button.module.scss';

export interface ButtonProps {
    style?: BUTTON_STYLE_ENUM;
    size?: COMPONENTS_SIZE_ENUM;
    label?: string;
    border?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    style = BUTTON_STYLE_ENUM.PRIMARY,
    size = COMPONENTS_SIZE_ENUM.SMALL,
    label,
    border = true,
    children,
    className,
    ...props
}) => {
    return (
        <button
            type="button"
            className={classNames(styles.root, styles[size], styles[style], className, {
                [styles.borderless]: !border,
            })}
            {...props}
        >
            {children ? children : label}
        </button>
    );
};
