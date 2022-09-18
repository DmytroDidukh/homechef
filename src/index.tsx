import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'containers/app/app';
import { TranslationProvider } from 'containers/translation/translation.provider';

import { store } from 'store/store';
import { TRANSLATION_MESSAGES } from 'translations/messages';
import { getItemFromLocalStorage } from 'services/storage-service';
import { STORAGE_KEYS } from 'constants/app';

import { LANGUAGE_ENUM } from 'typescript/enums';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// @ts-ignore
const storageLocale: LANGUAGE_ENUM = getItemFromLocalStorage(STORAGE_KEYS.LANGUAGE);

const Root = () => {
    const [locale, setLocale] = useState(storageLocale || LANGUAGE_ENUM.UKRAINIAN);

    return (
        <Provider store={store}>
            <BrowserRouter>
                <TranslationProvider
                    locale={locale}
                    setLocale={setLocale}
                    defaultLocale={LANGUAGE_ENUM.UKRAINIAN}
                    messages={TRANSLATION_MESSAGES}
                >
                    <App />
                </TranslationProvider>
            </BrowserRouter>
        </Provider>
    );
};

root.render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>,
);
