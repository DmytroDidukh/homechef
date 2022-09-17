import React, { createContext, useCallback, useMemo } from 'react';

import { LANGUAGE_ENUM } from 'typescript/enums';

interface TranslationProviderProps {
    children: React.ReactNode;
    locale: LANGUAGE_ENUM;
    setLocale: React.Dispatch<React.SetStateAction<LANGUAGE_ENUM>>;
    defaultLocale: LANGUAGE_ENUM;
    messages: any;
}

export interface GetMessageProps {
    messageKey: string;
    defaultMessage?: string;
}

type TranslationContextType = {
    getMessage(value: GetMessageProps): string;
    setLocale: (locale: LANGUAGE_ENUM) => void;
    locale: LANGUAGE_ENUM;
};

export const TranslationContext = createContext<TranslationContextType>({
    locale: LANGUAGE_ENUM.UKRAINIAN,
    setLocale() {},
    getMessage(): string {
        return '';
    },
});

export const TranslationProvider: React.FC<TranslationProviderProps> = ({
    children,
    locale,
    setLocale,
    defaultLocale,
    messages,
}) => {
    const getMessage = useCallback(
        ({ messageKey, defaultMessage }: GetMessageProps): string => {
            return (
                messages[locale]?.[messageKey] ??
                defaultMessage ??
                messages[defaultLocale][messageKey]
            );
        },
        [locale, messages, defaultLocale],
    );

    const value = useMemo(
        () => ({
            locale,
            setLocale,
            getMessage,
        }),
        [locale, setLocale, getMessage],
    );

    return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
};
