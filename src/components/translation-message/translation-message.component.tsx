import React from 'react';

import { useTranslation } from 'hooks/useTranslation';

interface TranslationMessageProps {
    messageKey: string;
    defaultMessage?: string;
}

// @ts-ignore
export const TranslationMessage: React.FC<TranslationMessageProps> = ({
    messageKey,
    defaultMessage = '',
}): string => {
    const { getMessage } = useTranslation();

    return getMessage({ messageKey, defaultMessage });
};
