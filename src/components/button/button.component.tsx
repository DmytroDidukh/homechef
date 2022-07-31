import React from 'react';
import classNames from 'classnames';

import styles from './button.module.scss';

export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    ...props
}) => {
    const mode = primary ? 'primary' : 'secondary';
    return (
        <button
            type="button"
            className={classNames(styles.root, styles[size], styles[mode])}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};
