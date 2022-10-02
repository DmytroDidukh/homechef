import React from 'react';
import classNames from 'classnames';

import { Image } from 'components/image/image.component';
import { RecipeImagePlaceholder } from 'components/recipe-image-placeholder/recipe-image-placeholder.component';
import { ImageTools } from 'components/image-tools/image-tools.component';

import {
    CustomErrorInterface,
    FilesSaveOptionsInterface,
    RecipeDataChangePropsInterface,
} from 'typescript/interfaces';
import { RECIPE_DATA_PROPERTY_ENUM } from 'typescript/enums';

import styles from './recipe-image.module.scss';

export interface RecipeImagePlaceholderProps {
    imageURL?: string;
    error?: CustomErrorInterface;
    fileSaveHandler: (file: File, options: FilesSaveOptionsInterface) => void;
    onDelete: (data: RecipeDataChangePropsInterface) => void;
    className?: string;
}

export const RecipeImage: React.FC<RecipeImagePlaceholderProps> = ({
    imageURL = '',
    error = { status: false },
    fileSaveHandler,
    onDelete,
    className,
}) => {
    const _onDelete = () => {
        onDelete({ property: RECIPE_DATA_PROPERTY_ENUM.IMAGE_URL });
    };

    return (
        <div className={classNames(styles.root, className)}>
            {!imageURL ? (
                <RecipeImagePlaceholder fileSaveHandler={fileSaveHandler} error={error} />
            ) : (
                <>
                    <div className={styles.image}>
                        <Image
                            skeletonProps={{ width: 600, height: 400 }}
                            src={imageURL}
                            alt="Food"
                        />
                    </div>
                    <ImageTools onDelete={_onDelete} />
                </>
            )}
        </div>
    );
};
