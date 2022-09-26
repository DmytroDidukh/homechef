import React, { ChangeEvent, useState } from 'react';
import classNames from 'classnames';

import { ErrorMessage } from 'components/error-message/error-message.component';

import { measureText } from 'utils/string';

import { CustomErrorInterface, RecipeDataChangeProps } from 'typescript/interfaces';
import { RECIPE_DATA_TRANSLATIONS_PROPERTY_ENUM } from 'typescript/enums';

import styles from './recipe-name-changeable.module.scss';

export interface RecipeTitleChangeableProps {
    initValue?: string;
    placeholderValue: string;
    error?: CustomErrorInterface;
    valueSaveHandler: (data: RecipeDataChangeProps, value: string) => void;
    className?: string;
}

export const RecipeNameChangeable: React.FC<RecipeTitleChangeableProps> = ({
    initValue = '',
    placeholderValue,
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
        valueSaveHandler(
            { translatedProperty: RECIPE_DATA_TRANSLATIONS_PROPERTY_ENUM.NAME },
            value,
        );
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
                placeholder={placeholderValue}
                value={value}
                onChange={changeHandler}
                onBlur={blurHandler}
                {...props}
            />
            {error.status && error.message && <ErrorMessage message={error.message} />}
        </div>
    );
};
