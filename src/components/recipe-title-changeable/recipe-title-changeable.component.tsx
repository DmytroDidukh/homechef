import React, { ChangeEvent, useState } from 'react';
import classNames from 'classnames';

import { ErrorMessage } from 'components/error-message/error-message.component';

import { measureText } from 'utils/string';

import { CustomErrorInterface } from 'typescript/interfaces';

import styles from './recipe-title-changeable.module.scss';

export interface RecipeTitleChangeableProps {
    initValue?: string;
    error: CustomErrorInterface;
    saveHandler: (value: string) => void;
    className?: string;
}

export const RecipeTitleChangeable: React.FC<RecipeTitleChangeableProps> = ({
    initValue = '',
    error,
    saveHandler,
    className,
    ...props
}) => {
    const [value, setValue] = useState(initValue);

    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setValue(e.target.value);
    };

    const blurHandler = (): void => {
        saveHandler(value);
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
                placeholder="Назва рецепту"
                value={value}
                onChange={changeHandler}
                onBlur={blurHandler}
                {...props}
            />
            {error.status && error.message && <ErrorMessage message={error.message} />}
        </div>
    );
};
