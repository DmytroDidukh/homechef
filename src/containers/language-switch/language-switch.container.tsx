import React from 'react';

import { Button } from 'components/button/button.component';
import { TextDivider } from 'components/text-divider/text-divider.component';

import { useTranslation } from 'hooks/useTranslation';
import { setItemToLocalStorage } from 'services/storage-service';
import { STORAGE_KEYS } from 'constants/app';

import { BUTTON_STYLE_ENUM, LANGUAGE_ENUM } from 'typescript/enums';

import styles from './language-switch.module.scss';

export const LanguageSwitch: React.FC = (): JSX.Element => {
    const { locale, setLocale } = useTranslation();

    const onLanguageChange = (_language: LANGUAGE_ENUM) => {
        setLocale(_language);

        setItemToLocalStorage(STORAGE_KEYS.LANGUAGE, _language);
    };

    return (
        <div className={styles.root}>
            <Button
                label={LANGUAGE_ENUM.UKRAINIAN}
                style={BUTTON_STYLE_ENUM.TOGGLE}
                active={locale === LANGUAGE_ENUM.UKRAINIAN}
                onClick={() => onLanguageChange(LANGUAGE_ENUM.UKRAINIAN)}
                border={false}
                translate={false}
            />
            <Button
                label={LANGUAGE_ENUM.ENGLISH}
                style={BUTTON_STYLE_ENUM.TOGGLE}
                active={locale === LANGUAGE_ENUM.ENGLISH}
                onClick={() => onLanguageChange(LANGUAGE_ENUM.ENGLISH)}
                border={false}
                translate={false}
            />
            <TextDivider />
        </div>
    );
};
