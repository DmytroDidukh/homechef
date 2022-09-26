import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TranslationProvider } from 'containers/translation/translation.provider';
import { ErrorMessage } from 'components/error-message/error-message.component';

import { TRANSLATION_KEYS } from 'translations/keys';
import { TRANSLATION_MESSAGES } from 'translations/messages';

import { LANGUAGE_ENUM } from 'typescript/enums';

export default {
    title: 'Components/ErrorMessage',
    component: ErrorMessage,
    argTypes: {},
    decorators: [
        (Story) => (
            <TranslationProvider
                locale={LANGUAGE_ENUM.ENGLISH}
                setLocale={() => {}}
                defaultLocale={LANGUAGE_ENUM.ENGLISH}
                messages={TRANSLATION_MESSAGES}
            >
                <div style={{ position: 'relative' }}>
                    <div style={{ fontSize: '40px' }}> Anchor</div>
                    <Story />
                </div>
            </TranslationProvider>
        ),
    ],
} as ComponentMeta<typeof ErrorMessage>;

export const Default: ComponentStory<typeof ErrorMessage> = () => (
    <ErrorMessage messageKey={TRANSLATION_KEYS.ERRORS.RECIPE_CREATOR.INVALID_NAME} />
);
