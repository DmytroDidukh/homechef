import React, { useState } from 'react';
import classNames from 'classnames';

import { Skeleton, SkeletonProps } from 'components/skeleton/skeleton.component';

import { SKELETON_VARIANT_ENUM } from 'typescript/enums';

import styles from './image.module.scss';

export interface ImageProps {
    src?: string;
    alt?: string;
    rounded?: boolean;
    className?: string;
    skeletonProps: SkeletonProps;
}

export const Image: React.FC<ImageProps> = ({
    src,
    alt,
    rounded = false,
    className,
    skeletonProps,
    ...props
}) => {
    const [loading, setLoading] = useState<boolean>(!src);

    return (
        <>
            {!loading ? (
                <img
                    className={classNames(styles.root, className, { [styles.rounded]: rounded })}
                    src={src}
                    alt={alt}
                    onLoad={() => setLoading(false)}
                    {...props}
                />
            ) : (
                <Skeleton {...skeletonProps} variant={SKELETON_VARIANT_ENUM.RECT} />
            )}
        </>
    );
};
