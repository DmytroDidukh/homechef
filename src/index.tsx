import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'containers/app/app';

import './index.scss';
import { store } from 'store/store';
import { TranslationProvider } from './containers/translation/translation.provider';
import { TRANSLATION_MESSAGES } from './translations/messages';
import { LANGUAGE_ENUM } from './typescript/enums';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const Root = () => {
    const [locale, setLocale] = useState(LANGUAGE_ENUM.UKRAINIAN);

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
