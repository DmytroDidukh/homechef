import React from 'react';
import classNames from 'classnames';

import { Typography } from 'components/typography/typography.component';

import {
    BUTTON_STYLE_ENUM,
    COMPONENTS_SIZE_ENUM,
    TYPOGRAPHY_STYLE_ENUM,
    TYPOGRAPHY_VARIANT_ENUM,
} from 'typescript/enums';

import styles from './button.module.scss';

export interface ButtonProps {
    style?: BUTTON_STYLE_ENUM;
    size?: COMPONENTS_SIZE_ENUM;
    label?: string;
    title?: string;
    border?: boolean;
    active?: boolean;
    translate?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    style = BUTTON_STYLE_ENUM.PRIMARY,
    size = COMPONENTS_SIZE_ENUM.SMALL,
    label = '',
    title,
    border = true,
    active = false,
    translate = true,
    children,
    className,
    ...props
}) => {
    return (
        <button
            type="button"
            title={title}
            className={classNames(styles.root, styles[size], styles[style], className, {
                [styles.borderless]: !border,
                [styles.active]: active,
            })}
            {...props}
        >
            {children ? (
                children
            ) : (
                <Typography
                    translate={translate}
                    value={label}
                    variant={TYPOGRAPHY_VARIANT_ENUM.BUTTON}
                    style={TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_ALL}
                />
            )}
        </button>
    );
};
