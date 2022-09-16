import React, { ChangeEvent, useState } from 'react';
import classNames from 'classnames';

import { ErrorMessage } from 'components/error-message/error-message.component';

import { measureText } from 'utils/string';
import { TRANSLATIONS } from 'constants/translations';

import { CustomErrorInterface } from 'typescript/interfaces';
import { LANGUAGE_ENUM, RECIPE_DATA_PROPERTY_ENUM } from 'typescript/enums';

import styles from './recipe-name-changeable.module.scss';

export interface RecipeTitleChangeableProps {
    initValue?: string;
    language: LANGUAGE_ENUM;
    error?: CustomErrorInterface;
    valueSaveHandler: (property: RECIPE_DATA_PROPERTY_ENUM.NAME_UK, value: string) => void;
    className?: string;
}

export const RecipeNameChangeable: React.FC<RecipeTitleChangeableProps> = ({
    initValue = '',
    language,
    error = { status: false },
    valueSaveHandler,
    className,
    ...props
}) => {
    const [value, setValue] = useState(initValue);

    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setValue(e.target.value);
    };

    const blurHandler = (): void => {
        valueSaveHandler(RECIPE_DATA_PROPERTY_ENUM.NAME_UK, value);
    };

    return (
        <div
            className={classNames(styles.root, className, {
                [styles.invalid]: error.status,
            })}
        >
            <textarea
                className={styles.textarea}
                style={{ width: error.status ? measureText(value, 40).width : '100%' }}
                placeholder={TRANSLATIONS[language].RECIPE_CREATOR.RECIPE_NAME}
                value={value}
                onChange={changeHandler}
                onBlur={blurHandler}
                {...props}
            />
            {error.status && error.message && <ErrorMessage message={error.message} />}
        </div>
    );
};
