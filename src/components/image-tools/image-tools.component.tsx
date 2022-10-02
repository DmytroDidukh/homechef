import React from 'react';
import classNames from 'classnames';

import { Button } from 'components/button/button.component';

import { BUTTON_STYLE_ENUM, COMPONENTS_SIZE_ENUM } from 'typescript/enums';

import styles from './image-tools.module.scss';

export interface RecipeImagePlaceholderProps {
    onDelete: () => void;
    className?: string;
}

export const ImageTools: React.FC<RecipeImagePlaceholderProps> = ({ onDelete, className }) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Button
                className={styles.button}
                border={false}
                title="Delete"
                onClick={onDelete}
                size={COMPONENTS_SIZE_ENUM.SMALL}
                style={BUTTON_STYLE_ENUM.TRANSPARENT}
            >
                <>&#10006;</>
            </Button>
        </div>
    );
};
