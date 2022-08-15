import React, { ChangeEvent, SyntheticEvent } from 'react';
import classNames from 'classnames';

import { validationService } from 'services/validation-service';
import { FILE_CONFIG } from 'constants/app';

import { CustomErrorInterface } from 'typescript/interfaces';

import styles from './recipe-image-placeholder.module.scss';

export interface RecipeImagePlaceholderProps {
    initValue?: string;
    error?: CustomErrorInterface;
    fileSaveHandler: (file: File) => void;
    className?: string;
}

export const RecipeImagePlaceholder: React.FC<RecipeImagePlaceholderProps> = ({
    initValue = '',
    error = { status: false },
    fileSaveHandler,
    className,
}) => {
    console.log(initValue);
    const fileUploadHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        // @ts-ignore
        const file = e.target.files[0];

        if (validationService.validateImage(file)) {
            console.log('FILE IS VALID', file);
            fileSaveHandler(file);
        } else {
            console.error('FILE IS WRONG', file);
        }
    };

    // @ts-ignore
    const dragNDropHandler = (e: DragEvent<HTMLDivElement>): void => {
        e.preventDefault();

        if (e.dataTransfer.items) {
            for (let i = 0; i < e.dataTransfer.items.length; i++) {
                const file = e.dataTransfer.files[i];
                const isValid = validationService.validateImage(file);

                if (e.dataTransfer.items[i].kind === 'file' && !isValid) {
                    continue;
                }

                console.log('FILE IS VALID');
                fileSaveHandler(file);
                break;
            }
        }
    };

    return (
        <div
            className={classNames(styles.root, className, {
                [styles.invalid]: error.status,
            })}
        >
            <div
                id="drop_zone"
                role="presentation"
                className={classNames(styles.root, className)}
                onDrop={dragNDropHandler}
                onDragOver={(e: SyntheticEvent) => e.preventDefault()}
            >
                <label className={styles.label}>
                    <span>ЗАВАНТАЖТЕ ЗОБРАЖЕННЯ</span>
                    <input
                        type="file"
                        name="file-upload"
                        style={{ display: 'none' }}
                        accept={FILE_CONFIG.IMAGE.ACCEPT.join(',')}
                        onChange={fileUploadHandler}
                    />
                </label>
            </div>
        </div>
    );
};
