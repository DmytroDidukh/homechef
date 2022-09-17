import React, { ChangeEvent, SyntheticEvent } from 'react';
import classNames from 'classnames';

import { Typography } from 'components/typography/typography.component';

import UploadImage from 'icons/upload-image.svg';
import UploadImagePrimary from 'icons/upload-image-primary.svg';

import { validationService } from 'services/validation-service';
import { FILE_CONFIG } from 'constants/app';
import { TRANSLATION_KEYS } from 'translations/keys';

import { CustomErrorInterface, FilesSaveOptionsInterface } from 'typescript/interfaces';
import { TYPOGRAPHY_STYLE_ENUM, TYPOGRAPHY_VARIANT_ENUM } from 'typescript/enums';

import styles from './recipe-image-placeholder.module.scss';

export interface RecipeImagePlaceholderProps {
    initURL?: string;
    error?: CustomErrorInterface;
    fileSaveHandler: (file: File, options: FilesSaveOptionsInterface) => void;
    className?: string;
}

export const RecipeImagePlaceholder: React.FC<RecipeImagePlaceholderProps> = ({
    initURL = '',
    error = { status: false },
    fileSaveHandler,
    className,
}) => {
    console.log(initURL);
    const fileUploadHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        // @ts-ignore
        const file = e.target.files[0];

        if (validationService.validateImage(file)) {
            console.log('FILE IS VALID', file);
            fileSaveHandler(file, { main: true });
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
                fileSaveHandler(file, { main: true });
                break;
            }
        }
    };

    return (
        <div
            id="drop_zone"
            role="presentation"
            className={classNames(styles.root, className, {
                [styles.invalid]: error.status,
            })}
            onDrop={dragNDropHandler}
            onDragOver={(e: SyntheticEvent) => e.preventDefault()}
        >
            <label className={styles.label}>
                <div className={styles.image}>
                    <img src={UploadImage} alt="Upload" />
                    <img src={UploadImagePrimary} alt="Upload" />
                </div>
                <Typography
                    translate
                    value={TRANSLATION_KEYS.UPLOAD_IMAGE.UPLOAD}
                    variant={TYPOGRAPHY_VARIANT_ENUM.TEXT}
                    style={TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_ALL}
                />
                <input
                    type="file"
                    name="file-upload"
                    style={{ display: 'none' }}
                    accept={FILE_CONFIG.IMAGE.ACCEPT.join(',')}
                    onChange={fileUploadHandler}
                />
            </label>
        </div>
    );
};
