import React from 'react';

import { Button } from 'components/button/button.component';
import { TextDivider } from 'components/text-divider/text-divider.component';

import { useActions, useAppSelector } from 'store/hooks';
import { selectLanguage } from 'store/slices/app';
import { setItemToLocalStorage } from 'services/storage-service';
import { STORAGE_KEYS } from 'constants/app';

import { BUTTON_STYLE_ENUM, LANGUAGE_ENUM } from 'typescript/enums';

import styles from './language-switch.module.scss';

export const LanguageSwitch: React.FC = (): JSX.Element => {
    const { setLanguage } = useActions();

    const language = useAppSelector(selectLanguage);

    const onLanguageChange = (_language: LANGUAGE_ENUM) => {
        setLanguage(_language);

        setItemToLocalStorage(STORAGE_KEYS.LANGUAGE, _language);
    };

    return (
        <div className={styles.root}>
            <Button
                label={LANGUAGE_ENUM.UKRAINIAN}
                style={BUTTON_STYLE_ENUM.TOGGLE}
                active={language === LANGUAGE_ENUM.UKRAINIAN}
                onClick={() => onLanguageChange(LANGUAGE_ENUM.UKRAINIAN)}
                border={false}
            />
            <Button
                label={LANGUAGE_ENUM.ENGLISH}
                style={BUTTON_STYLE_ENUM.TOGGLE}
                active={language === LANGUAGE_ENUM.ENGLISH}
                onClick={() => onLanguageChange(LANGUAGE_ENUM.ENGLISH)}
                border={false}
            />
            <TextDivider />
        </div>
    );
};
