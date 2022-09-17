import { useContext } from 'react';
import { TranslationContext } from 'containers/translation/translation.provider';

export const useTranslation = () => useContext(TranslationContext);
