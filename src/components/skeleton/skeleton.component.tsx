import React from 'react';
import classNames from 'classnames';

import {
    SKELETON_ALIGN_ITEMS_ENUM,
    SKELETON_JUSTIFY_CONTENT_ENUM,
    SKELETON_VARIANT_ENUM,
} from 'typescript/enums';

import styles from './skeleton.module.scss';

export interface SkeletonProps {
    variant?: SKELETON_VARIANT_ENUM;
    width?: number | string;
    height?: number | string;
    horizontal?: boolean;
    vertical?: boolean;
    radius?: number;
    justifyContent?: SKELETON_JUSTIFY_CONTENT_ENUM;
    alignItems?: SKELETON_ALIGN_ITEMS_ENUM;
    count?: number;
    className?: string;
    children?: React.ReactNode;
}

export const Skeleton: React.FC<SkeletonProps> = ({
    variant,
    width,
    height,
    horizontal = true,
    vertical = false,
    radius,
    justifyContent = SKELETON_JUSTIFY_CONTENT_ENUM.START,
    alignItems = SKELETON_ALIGN_ITEMS_ENUM.START,
    count = 1,
    className,
    children,
}) => {
    return (
        <>
            {Array.from(Array(count).keys()).map((num) => (
                <div
                    key={num}
                    className={classNames(
                        styles.root,

                        {
                            // @ts-ignore
                            [styles[variant]]: variant,
                            [styles.variant]: variant,
                            [styles.vertical]: vertical,
                            [styles.horizontal]: horizontal,
                            [styles.pulse]: variant,
                        },
                        className,
                    )}
                    style={{
                        width,
                        height,
                        ...(radius ? { borderRadius: radius } : {}),
                        justifyContent,
                        alignItems,
                    }}
                >
                    {children}
                </div>
            ))}
        </>
    );
};
