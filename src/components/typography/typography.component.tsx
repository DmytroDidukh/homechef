import React from 'react';
import classNames from 'classnames';

import { useTranslation } from 'hooks/useTranslation';
import { typographyService } from 'services/typography-service';

import {
    TYPOGRAPHY_FONT_WEIGH_ENUM,
    TYPOGRAPHY_STYLE_ENUM,
    TYPOGRAPHY_VARIANT_ENUM,
} from 'typescript/enums';

import styles from './typography.module.scss';

export interface TypographyProps {
    value: string;
    variant: TYPOGRAPHY_VARIANT_ENUM;
    style: TYPOGRAPHY_STYLE_ENUM;
    weight?: TYPOGRAPHY_FONT_WEIGH_ENUM;
    translate?: boolean;
    className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
    value,
    variant,
    style,
    weight = '',
    translate = false,
    className,
    ...props
}) => {
    console.log(value);
    const { getMessage } = useTranslation();
    const Element = typographyService.getElement(variant);

    return (
        <Element
            className={classNames(styles.root, styles[variant], styles[weight], className, {
                [styles.button]: variant === TYPOGRAPHY_VARIANT_ENUM.BUTTON,
            })}
            {...props}
        >
            {typographyService.style(
                variant,
                style,
                translate ? getMessage({ messageKey: value }) : value,
            )}
        </Element>
    );
};
